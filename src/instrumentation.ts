export async function register() {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!url || !key) {
      console.log("\x1b[33m[VISION VERSE24] Supabase not configured in .env.local (Running in local store mode)\x1b[0m");
      return;
    }

    try {
      const { createClient } = await import("@supabase/supabase-js");
      const client = createClient(url, key, {
        auth: { persistSession: false, autoRefreshToken: false },
      });

      const { error } = await client.from("enquiries").select("id").limit(1);

      if (error && error.code === "PGRST205") {
        console.log(
          "\x1b[33m⚠️  [VISION VERSE24] Supabase reachable, but 'enquiries' table not created yet. (Run 001_initial_schema.sql in Supabase SQL editor)\x1b[0m"
        );
      } else if (!error) {
        console.log(
          `\x1b[32m✅ [VISION VERSE24] DATABASE IS CONNECTED SUCCESSFULLY! [Supabase: ${url}]\x1b[0m`
        );
      }
    } catch {
      // Non-blocking catch
    }
  }
}
