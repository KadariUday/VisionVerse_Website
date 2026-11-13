import http from 'http';

const BASE_URL = 'http://localhost:3000';

async function waitServer(url, timeoutMs = 15000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try {
      const res = await fetch(url);
      if (res.status) return true;
    } catch (e) {
      await new Promise(r => setTimeout(r, 500));
    }
  }
  return false;
}

async function runTests() {
  console.log('🚀 Checking server connectivity at', BASE_URL);
  const up = await waitServer(BASE_URL);
  if (!up) {
    console.error('❌ Server did not respond within timeout');
    process.exit(1);
  }
  console.log('✅ Server is UP and healthy!\n');

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

  // 1. Test Static & Dynamic Pages
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

  // 2. Test API: Services
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

  // 3. Test API: Projects
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

  // 4. Test API: Enquiry Submission (Form to WhatsApp System)
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
      console.log(`   • WhatsApp Click-to-Chat URL: ${data.whatsappUrl.substring(0, 70)}...`);
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

  // 5. Test Admin Auth & Enquiry Fetching
  let adminCookie = null;
  try {
    // Attempt with invalid key -> should fail
    const badAuth = await fetch(`${BASE_URL}/api/auth/admin`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ key: "wrong-password" }),
    });
    if (badAuth.status === 401) {
      console.log(`✅ [401] Admin Auth properly rejects invalid credentials`);
      passed++;
    } else {
      console.error(`❌ Admin Auth failed to reject invalid key`);
      failed++;
    }

    // Attempt with valid key
    const goodAuth = await fetch(`${BASE_URL}/api/auth/admin`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ key: "visionverse24-admin-dev-key" }),
    });
    const authHeaders = goodAuth.headers.get("set-cookie");
    if (goodAuth.status === 200 && authHeaders) {
      console.log(`✅ [200] Admin Auth succeeds with valid key and issues secure cookie`);
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

  // 6. Test Admin Enquiries Retrieval & Status Update
  if (adminCookie && testEnquiryId) {
    try {
      const getEnquiriesRes = await fetch(`${BASE_URL}/api/enquiries`, {
        headers: { Cookie: adminCookie },
      });
      const enquiriesData = await getEnquiriesRes.json();
      if (getEnquiriesRes.status === 200 && Array.isArray(enquiriesData.enquiries)) {
        const found = enquiriesData.enquiries.find(e => e.enquiry_number === testEnquiryNumber || e.id === testEnquiryId);
        if (found) {
          console.log(`✅ [200] Admin endpoint successfully retrieved submitted enquiry ${testEnquiryNumber}`);
          passed++;

          // Test Status Update
          const patchRes = await fetch(`${BASE_URL}/api/enquiries/${found.id}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
              Cookie: adminCookie,
            },
            body: JSON.stringify({ status: "in-progress", notes: "Contacted customer on WhatsApp" }),
          });
          const patchData = await patchRes.json();
          if (patchRes.status === 200 && patchData.success && patchData.enquiry.status === "in-progress") {
            console.log(`✅ [200] Admin endpoint successfully transitioned enquiry status to 'in-progress'`);
            passed++;
          } else {
            console.error(`❌ Status update failed:`, patchData);
            failed++;
          }
        } else {
          console.error(`❌ Submitted enquiry not found in admin list`);
          failed++;
        }
      } else {
        console.error(`❌ Failed to fetch enquiries as admin:`, enquiriesData);
        failed++;
      }
    } catch (e) {
      console.error(`❌ Admin retrieval error:`, e.message);
      failed++;
    }
  }

  console.log(`\n========================================`);
  console.log(`TEST SUMMARY: ${passed} PASSED, ${failed} FAILED`);
  console.log(`========================================\n`);

  if (failed > 0) {
    process.exit(1);
  } else {
    process.exit(0);
  }
}

runTests();
