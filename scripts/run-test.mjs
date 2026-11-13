import { spawn } from 'child_process';
import path from 'path';

const isWindows = process.platform === 'win32';
const nextBin = path.join(process.cwd(), 'node_modules', '.bin', isWindows ? 'next.cmd' : 'next');
const BASE_URL = 'http://127.0.0.1:3005';

console.log('Spawning Next.js server:', nextBin, 'start -H 127.0.0.1 -p 3005');

const server = spawn(nextBin, ['start', '-H', '127.0.0.1', '-p', '3005'], {
  stdio: ['ignore', 'pipe', 'pipe'],
  shell: true,
});

server.stdout.on('data', (data) => {
  const msg = data.toString();
  console.log('[NEXT STDOUT]', msg.trim());
});

server.stderr.on('data', (data) => {
  console.error('[NEXT STDERR]', data.toString().trim());
});

async function waitServer(url, timeoutMs = 20000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try {
      const res = await fetch(url);
      if (res && res.status) return true;
    } catch (e) {
      await new Promise((r) => setTimeout(r, 500));
    }
  }
  return false;
}

async function run() {
  try {
    console.log('Waiting for Next.js to be ready on', BASE_URL);
    const ready = await waitServer(BASE_URL);
    if (!ready) {
      throw new Error(`Next.js server failed to respond on ${BASE_URL}`);
    }

    console.log('\n--- EXECUTING TEST SUITE ---\n');
    let passed = 0;
    let failed = 0;

    async function testPage(name, path) {
      try {
        const res = await fetch(`${BASE_URL}${path}`);
        if (res.status === 200) {
          console.log(`✅ [${res.status}] Page: ${name} (${path})`);
          passed++;
        } else {
          console.error(`❌ [${res.status}] Page: ${name} (${path})`);
          failed++;
        }
      } catch (err) {
        console.error(`❌ Error fetching ${path}:`, err.message);
        failed++;
      }
    }

    await testPage('Homepage', '/');
    await testPage('About Us', '/about');
    await testPage('Services & Pricing', '/services');
    await testPage('Our Projects', '/projects');
    await testPage('SR Jewellery Case Study', '/projects/sr-jewellery-collections');
    await testPage('Kadari Uday Portfolio', '/projects/kadari-uday-portfolio');
    await testPage('Pricing', '/pricing');
    await testPage('Development Process', '/process');
    await testPage('Contact Page', '/contact');
    await testPage('FAQ Page', '/faq');
    await testPage('Privacy Policy', '/privacy-policy');
    await testPage('Terms of Service', '/terms');
    await testPage('Admin Portal', '/admin');
    await testPage('Sitemap XML', '/sitemap.xml');
    await testPage('Robots TXT', '/robots.txt');

    // API: Services
    try {
      const res = await fetch(`${BASE_URL}/api/services`);
      const data = await res.json();
      if (res.status === 200 && Array.isArray(data.services) && data.services.length === 5) {
        console.log(`✅ [200] API: /api/services returned 5 configured services`);
        passed++;
      } else {
        console.error(`❌ API /api/services response unexpected:`, data);
        failed++;
      }
    } catch (e) {
      console.error(`❌ API /api/services error:`, e.message);
      failed++;
    }

    // API: Projects
    try {
      const res = await fetch(`${BASE_URL}/api/projects`);
      const data = await res.json();
      if (res.status === 200 && Array.isArray(data.projects) && data.projects.length >= 4) {
        console.log(`✅ [200] API: /api/projects returned ${data.projects.length} verified projects`);
        passed++;
      } else {
        console.error(`❌ API /api/projects response unexpected:`, data);
        failed++;
      }
    } catch (e) {
      console.error(`❌ API /api/projects error:`, e.message);
      failed++;
    }

    // API: Enquiry Submission
    let testEnquiryNumber = null;
    let testEnquiryId = null;
    try {
      const enquiryPayload = {
        fullName: "Anand Kumar",
        whatsappNumber: "9392438853",
        email: "anand.test@example.com",
        customerType: "Student",
        serviceRequired: "Portfolio Website",
        budget: "₹500–₹1,000",
        projectDescription: "Need a personal developer portfolio with dark theme and GitHub integration.",
        contactPreference: "WhatsApp",
        deliveryDate: "Within 2 days",
        referenceUrl: "https://portfolio-kadariudays-projects.vercel.app/",
      };

      const res = await fetch(`${BASE_URL}/api/enquiries`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(enquiryPayload),
      });

      const data = await res.json();
      if (res.status === 200 && data.success && data.enquiryNumber && data.whatsappUrl) {
        console.log(`✅ [200] API: /api/enquiries submitted successfully!`);
        console.log(`   • Generated Enquiry ID: ${data.enquiryNumber}`);
        console.log(`   • Generated WhatsApp URL: ${data.whatsappUrl.substring(0, 65)}...`);
        testEnquiryNumber = data.enquiryNumber;
        testEnquiryId = data.enquiryId;
        passed++;
      } else {
        console.error(`❌ API /api/enquiries submission failed:`, data);
        failed++;
      }
    } catch (e) {
      console.error(`❌ API /api/enquiries error:`, e.message);
      failed++;
    }

    // Admin Auth
    let adminCookie = null;
    try {
      const badAuth = await fetch(`${BASE_URL}/api/auth/admin`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ key: "wrong-password" }),
      });
      if (badAuth.status === 401) {
        console.log(`✅ [401] Admin Auth rejects invalid key`);
        passed++;
      } else {
        console.error(`❌ Admin Auth failed to reject invalid key`);
        failed++;
      }

      const goodAuth = await fetch(`${BASE_URL}/api/auth/admin`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ key: "visionverse24-admin-dev-key" }),
      });
      const authHeaders = goodAuth.headers.get("set-cookie");
      if (goodAuth.status === 200 && authHeaders) {
        console.log(`✅ [200] Admin Auth succeeded and issued cookie`);
        adminCookie = authHeaders.split(';')[0];
        passed++;
      } else {
        console.error(`❌ Admin Auth failed with valid key`);
        failed++;
      }
    } catch (e) {
      console.error(`❌ Admin Auth error:`, e.message);
      failed++;
    }

    // Admin Enquiries Fetch & Patch
    if (adminCookie && testEnquiryId) {
      try {
        const getEnquiriesRes = await fetch(`${BASE_URL}/api/enquiries`, {
          headers: { Cookie: adminCookie },
        });
        const enquiriesData = await getEnquiriesRes.json();
        if (getEnquiriesRes.status === 200 && Array.isArray(enquiriesData.enquiries)) {
          const found = enquiriesData.enquiries.find(
            (e) => e.enquiry_number === testEnquiryNumber || e.id === testEnquiryId
          );
          if (found) {
            console.log(`✅ [200] Admin retrieved created enquiry (${found.enquiry_number})`);
            passed++;

            const patchRes = await fetch(`${BASE_URL}/api/enquiries/${found.id}`, {
              method: "PATCH",
              headers: {
                "Content-Type": "application/json",
                Cookie: adminCookie,
              },
              body: JSON.stringify({ status: "in-progress" }),
            });
            const patchData = await patchRes.json();
            if (patchRes.status === 200 && patchData.success && patchData.enquiry.status === "in-progress") {
              console.log(`✅ [200] Admin updated status to 'in-progress'`);
              passed++;
            }
          }
        }
      } catch (e) {
        console.error(`❌ Admin operations error:`, e.message);
        failed++;
      }
    }

    console.log(`\n========================================`);
    console.log(`FINAL TEST REPORT: ${passed} PASSED, ${failed} FAILED`);
    console.log(`========================================\n`);

  } finally {
    console.log('Terminating Next.js server process...');
    server.kill();
    try {
      process.kill(server.pid);
    } catch {}
  }
}

run();
