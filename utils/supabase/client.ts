import { createBrowserClient } from "@supabase/ssr";

const supabaseUrl = "https://xnkxgbvdtaxrmnkukosb.supabase.co";
const supabaseKey = "sb_publishable_IZl60RLqYunfYHhRhb0lBA_7RgrWV1y";

export const createClient = () =>
  createBrowserClient(supabaseUrl!, supabaseKey!);
