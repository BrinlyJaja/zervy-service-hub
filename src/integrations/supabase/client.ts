// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://xwemmmdshsecwctqxjmf.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh3ZW1tbWRzaHNlY3djdHF4am1mIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg4ODYxMTAsImV4cCI6MjA2NDQ2MjExMH0.NOxN1_xrYMJzDX9k_5QqZ_ISEDeJbxUGPcE8WYZshYg";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);