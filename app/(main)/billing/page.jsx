"use client";
import React from "react";
import Pricing from "./_component/pricing";
import { useUser } from "@/app/provider";
import Link from "next/link";
import { Button } from "@/components/ui/button";

function Billing() {
  const { user } = useUser();
  const subscription = user?.subscription;
  console.log("User Subscriptions:", subscription);

  return (
    <div>
      {subscription == "PRO" ? (
        <div className="flex flex-col items-center justify-center min-h-screen text-center p-6">
          <h1 className="text-3xl font-bold mb-4">
            You're Already on the Pro Plan 🎉
          </h1>
          <p className="text-lg mb-6 text-gray-600">
            You already have access to all premium features. Head back to your
            dashboard to make the most of your subscription.
          </p>
          <Button>
            <Link href="/dashboard">Go to Dashboard</Link>
          </Button>
        </div>
      ) : (
        <Pricing />
      )}
    </div>
  );
}

export default Billing;
