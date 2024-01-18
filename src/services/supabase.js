import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://midjqwaobcnazwokoyvv.supabase.co";
const supabaseKey =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1pZGpxd2FvYmNuYXp3b2tveXZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ5OTY1NjcsImV4cCI6MjAyMDU3MjU2N30.324VVifXKRHWzKSv4oMynWCRCUyVwlb7c_-wBqrkVy8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
