"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/services/supabaseClient";

export default function Callback() {
  const router = useRouter();

  useEffect(() => {
    const handleAuth = async () => {
      const {
        data: { session },
        error: sessionError,
      } = await supabase.auth.getSession();

      if (!session) {
        console.log("No session found:", sessionError);
        return;
      }

      const user = session.user;

      const { data: existingUsers, error } = await supabase
        .from("Users")
        .select("*")
        .eq("email", user.email);

      if (!existingUsers.length) {
        await supabase.from("Users").insert({
          name: user.user_metadata.name,
          email: user.email,
          picture: user.user_metadata.picture,
        });
      }

      router.push("/");
    };

    handleAuth();
  }, [router]);

  return <div>Logging you in...</div>;
}
