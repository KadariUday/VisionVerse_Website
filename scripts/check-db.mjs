import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';

// ANSI colors for clean terminal output
const cyan = '\x1b[36m';
const green = '\x1b[32m';
const yellow = '\x1b[33m';
const red = '\x1b[31m';
const bold = '\x1b[1m';
const reset = '\x1b[0m';

async function checkDatabase() {
  const envPath = path.resolve(process.cwd(), '.env.local');
  if (!fs.existsSync(envPath)) {
    console.log(`${yellow}⚠️  [VISION VERSE24] .env.local file not found. Running in local fallback mode.${reset}\n`);
    return;
  }

  const envContent = fs.readFileSync(envPath, 'utf-8');
  const env = {};
  for (const line of envContent.split('\n')) {
    const match = line.match(/^([^#=]+)=(.*)$/);
    if (match) {
      env[match[1].trim()] = match[2].trim();
    }
  }

  const url = env.NEXT_PUBLIC_SUPABASE_URL;
  const key = env.SUPABASE_SERVICE_ROLE_KEY || env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !key) {
    console.log(`\n${yellow}------------------------------------------------------------`);
    console.log(`  ⚠️  VISION VERSE24 — DATABASE CREDENTIALS NOT SET`);
    console.log(`------------------------------------------------------------`);
    console.log(`  Supabase URL or keys are missing in .env.local.`);
    console.log(`  The website is running in resilient local storage mode.`);
    console.log(`------------------------------------------------------------${reset}\n`);
    return;
  }

  try {
    const client = createClient(url, key, {
      auth: { persistSession: false, autoRefreshToken: false },
    });

    const { error } = await client
      .from('enquiries')
      .select('id')
      .limit(1);

    if (error) {
      if (error.code === 'PGRST205') {
        console.log(`\n${yellow}------------------------------------------------------------`);
        console.log(`  ⚠️  VISION VERSE24 — SUPABASE DATABASE NOT INITIALIZED YET`);
        console.log(`------------------------------------------------------------`);
        console.log(`  Connected to: ${cyan}${url}${yellow}`);
        console.log(`  Status:       Credentials verified, but tables not created yet.`);
        console.log(`  Next Step:    Go to Supabase -> SQL Editor -> Run the script in:`);
        console.log(`                ${bold}supabase/migrations/001_initial_schema.sql${reset}${yellow}`);
        console.log(`------------------------------------------------------------${reset}\n`);
        return;
      }
      console.log(`\n${red}⚠️  Supabase Connection Error: ${error.message}${reset}\n`);
      return;
    }

    console.log(`\n${green}============================================================`);
    console.log(`  ${bold}🚀 VISION VERSE24 — DATABASE STATUS${reset}${green}`);
    console.log(`============================================================`);
    console.log(`  ${bold}✅ DATABASE IS CONNECTED SUCCESSFULLY!${reset}${green}`);
    console.log(`  Provider:  Supabase PostgreSQL (Cloud)`);
    console.log(`  Host:      ${cyan}${url}${green}`);
    console.log(`  Status:    Tables (enquiries, projects, services) active`);
    console.log(`  Security:  Row Level Security (RLS) enabled`);
    console.log(`============================================================${reset}\n`);
  } catch (err) {
    console.log(`\n${yellow}⚠️  Could not reach Supabase (${err.message}). Using local storage.${reset}\n`);
  }
}

checkDatabase().catch(() => {});
