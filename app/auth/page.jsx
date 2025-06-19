"use client";
import { Button } from "@/components/ui/button";
import { supabase } from "@/services/supabaseClient";
import Image from "next/image";
import React from "react";

function Login() {
  console.log("Login page is running");
  const handleGoogleSignIn = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: "http://localhost:3000/auth/callback", // Change this to your redirect URL
      },
    });
    if (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col items-center border rounded-2xl p-8 gap-5">
        <Image
          src={"/logo.svg"}
          alt="Logo"
          height={100}
          width={400}
          className="w-[180px]"
        />
        <div className="flex flex-col items-center">
          <Image
            src={"/login.png"}
            alt="Login"
            height={600}
            width={400}
            className="w-[400px] h-[250px]"
          />
          <h2 className="text-2xl font-bold text-center mt-5">
            Welcome to AI Recruiter
          </h2>
          <p className="text-gray-500 text-center">Sign in with Google</p>
          <Button
            className="mt-7 w-full hover:bg-accent transition-all hover:text-black"
            onClick={handleGoogleSignIn}
          >
            <Image src={"/Google icon.svg"} alt="G" height={20} width={20} />
            Sign in with Google
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Login;
