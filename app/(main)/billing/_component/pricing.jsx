"use client";
import Script from "next/script";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { supabase } from "@/services/supabaseClient";
import { useUser } from "@/app/provider";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function Pricing() {
  const amount = 599;
  const { user } = useUser();
  const [isProcessing, setIsProcessing] = useState(false);
  const router = useRouter();

  const handlepayment = async () => {
    setIsProcessing(true);

    try {
      //create order
      const response = await fetch("api/create-order", { method: "POST" });
      const data = await response.json();

      //Intialize Razorpay
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: amount * 100, // Amount in paise for ₹599
        currency: "INR",
        name: "AI Recruiter Pro Plan",
        description: "Upgrade to Pro Plan (test transaction)",
        order_id: data.order_id,
        handler: async function (response) {
          // update the user credits

          const userUpdate = await supabase
            .from("Users")
            .update({
              credits: Number(user?.credits) + 30,
              subscription: "PRO",
            })
            .eq("email", user?.email)
            .select();

          console.log("User Update", userUpdate);
          toast("🎉 Pro Plan Activated Successfully!");
        },
        prefill: {
          name: user?.userName,
          email: user?.userEmail,
        },
        theme: {
          color: "#3399cc",
        },
      };
      const rzp1 = new window.Razorpay(options);
      rzp1.open();
    } catch (error) {
      console.error("Payment failed :", error);
      toast.error("Failed to initiate payment. Please try again.");
    } finally {
      setIsProcessing(false);
      router.push("/dashboard");
    }
  };

  return (
    <section className="py-16 md:py-32">
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-2xl space-y-6 text-center">
          <h1 className="text-center text-4xl font-semibold lg:text-5xl">
            Unlock More with the Pro Plan
          </h1>
          <p>
            AI Recruiter simplifies hiring with AI-driven candidate matching,
            interview scheduling, and detailed analytics. Upgrade to the Pro
            Plan for powerful tools that help you hire smarter and faster.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:mt-20 md:grid-cols-5 md:gap-0">
          <div className="rounded-(--radius) flex flex-col justify-between space-y-8 border p-6 md:col-span-2 md:my-2 md:rounded-r-none md:border-r-0 lg:p-10">
            <div className="space-y-4">
              <div>
                <h2 className="font-medium">Free</h2>
                <span className="my-3 block text-2xl font-semibold">
                  ₹0 / mo
                </span>
                <p className="text-muted-foreground text-sm">Per editor</p>
              </div>

              <Button asChild variant="outline" className="w-full">
                <Link href="/dashboard">Get Started</Link>
              </Button>

              <hr className="border-dashed" />

              <ul className="list-outside space-y-3 text-sm">
                {[
                  "Basic Analytics Dashboard",
                  "5GB Cloud Storage",
                  "Email and Chat Support",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Check className="size-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="dark:bg-muted rounded-(--radius) border p-6 shadow-lg shadow-gray-950/5 md:col-span-3 lg:p-10 dark:[--color-muted:var(--color-zinc-900)]">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-4">
                <div>
                  <h2 className="font-medium">Pro</h2>
                  <span className="my-3 block text-2xl font-semibold">
                    ₹{amount} / mo
                  </span>
                  <p className="text-muted-foreground text-sm">Per editor</p>
                </div>

                <Button
                  asChild
                  className="w-full"
                  onClick={handlepayment}
                  disabled={isProcessing}
                >
                  <Link href="">
                    {isProcessing ? "Processing..." : "Get Started"}
                  </Link>
                </Button>
              </div>

              <div>
                <div className="text-sm font-medium">
                  Everything in free plus :
                </div>

                <ul className="mt-4 list-outside space-y-3 text-sm">
                  {[
                    "Everything in Free Plan",
                    "30 Credits Per Month",
                    "Create 30 Interviews Per Month",
                    "5GB Cloud Storage",
                    "Email and Chat Support",
                    "Access to Community Forum",
                    "Single User Access",
                    "1 Custom Report Per Month",
                    "Monthly Product Updates",
                    "Standard Security Features",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check className="size-3" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
