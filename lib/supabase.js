import { createClient } from '@supabase/supabase-js'

// Supabase configuration
// Add NEXT_PUBLIC_SUPABASE_URL to your environment variables in Vercel
// Format: https://your-project-id.supabase.co
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'sb_publishable_fqTSftIhXgzJmtu3bCMlXg_etlc8rrC'

// Only warn in development, not during build
if (typeof window !== 'undefined' && !process.env.NEXT_PUBLIC_SUPABASE_URL) {
  console.warn('NEXT_PUBLIC_SUPABASE_URL is not set. Please add it to your environment variables.')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true
  }
})

