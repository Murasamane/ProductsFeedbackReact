import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://magpkjsrwyjkjaeeuivg.supabase.co";
const supabaseKey = 'key';
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
