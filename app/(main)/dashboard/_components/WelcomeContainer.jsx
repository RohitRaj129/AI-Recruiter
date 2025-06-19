"use client";
import { useUser } from "@/app/provider";
import Image from "next/image";
import React from "react";

function WelcomeContainer() {
  const userContext = useUser();
  const user = userContext?.user;

  if (!user) {
    return <div>Loading user...</div>;
  }

  return (
    <div className="bg-white p-5 rounded-2xl flex justify-between items-center">
      <div>
        <h2 className="text-lg font-bold">Welcome Back, {user.name}</h2>
        <h2 className="text-gray-500">
          AI-Driven Interviews, Hassel-Free Hiring
        </h2>
      </div>
      <Image
        src={user?.picture}
        alt="userAvatar"
        width={50}
        height={50}
        className="rounded-full"
      />
    </div>
  );
}

export default WelcomeContainer;
