import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://bjoxfdjctzjryiramxuq.supabase.co";
const supabaseKey = "sb_publishable_TIEYQfD5rQjzwXH2RNtK2A_WupduBu-";

export const supabase = createClient(supabaseUrl, supabaseKey);
