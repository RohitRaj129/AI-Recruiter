"use client";
import { supabase } from "@/services/supabaseClient";
import React, { useContext, useEffect, useState } from "react";
import { UserDetailContext } from "@/context/UserDetailContext";

function Provider({ children }) {
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const CreateOrFetchUser = async () => {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();

      if (error || !user) {
        console.error("Error fetching user:", error);
        return;
      }

      const { data: Users, error: fetchError } = await supabase
        .from("Users")
        .select("*")
        .eq("email", user.email);

      console.log(Users);
      if (fetchError) {
        console.error("Error checking user existence:", fetchError);
        return;
      }

      if (!Users || Users.length === 0) {
        const { data: insertedUser, error: insertError } = await supabase
          .from("Users")
          .insert({
            name: user.user_metadata?.name,
            email: user.email,
            picture: user.user_metadata?.picture,
          })
          .select()
          .single();

        if (insertError) {
          console.error("Error inserting new user:", insertError);
          return;
        }

        setUserDetails(insertedUser);
      } else {
        setUserDetails(Users[0]);
      }
    };

    CreateOrFetchUser();
  }, []);

  return (
    <UserDetailContext.Provider value={{ user: userDetails }}>
      {children}
    </UserDetailContext.Provider>
  );
}

export default Provider;

export const useUser = () => {
  const context = useContext(UserDetailContext);
  return context;
};
