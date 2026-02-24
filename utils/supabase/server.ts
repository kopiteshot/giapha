import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

const supabaseUrl = "https://xnkxgbvdtaxrmnkukosb.supabase.co";
const supabaseKey = "sb_publishable_IZl60RLqYunfYHhRhb0lBA_7RgrWV1y";

export const createClient = (
  cookieStore: Awaited<ReturnType<typeof cookies>>,
) => {
  return createServerClient(supabaseUrl!, supabaseKey!, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) =>
            cookieStore.set(name, value, options),
          );
        } catch {
          // The `setAll` method was called from a Server Component.
          // This can be ignored if you have middleware refreshing
          // user sessions.
        }
      },
    },
  });
};
