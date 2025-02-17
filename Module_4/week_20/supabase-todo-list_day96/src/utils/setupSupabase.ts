import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
export const supabase = createClient('https://zkqgplwuxybbtilnhtez.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InprcWdwbHd1eHliYnRpbG5odGV6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY3NzM5NTksImV4cCI6MjA1MjM0OTk1OX0.zH3QbioLDCy9G4AsQuBY2MM1vBWR_T6yrAOtbY6PnR8')
