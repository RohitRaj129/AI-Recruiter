"use client";
import React, { useContext } from "react";
import Link from "next/link";
import { InterviewDataContext } from "@/context/InterviewDataContext";
import { Button } from "@/components/ui/button";
import { MailCheck, UserCheck2, View } from "lucide-react";

const InterviewComplete = () => {
  const { interviewInfo } = useContext(InterviewDataContext);

  return (
    <div className="relative flex size-full min-h-screen flex-col group/design-root overflow-x-hidden bg-gradient-to-b from-primary-50 to-white">
      <div className="layout-container flex h-full grow flex-col">
        <main className="flex flex-1 justify-center px-4 py-12 sm:px-6 lg:px-8">
          <div className="w-full max-w-4xl space-y-10">
            <div className="text-center space-y-6">
              <div className="flex justify-center">
                <div className="bg-primary-100 rounded-full p-4 mb-4">
                  <video
                    src="/check.webm"
                    autoPlay
                    muted
                    className="w-[75px] h-[75px]"
                  />
                </div>
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-primary-900 sm:text-5xl">
                Thank You for Completing Your Interview!
              </h1>
              <p className="mt-4 text-xl text-primary-700 max-w-2xl mx-auto">
                We appreciate you taking the time to interview with us. Your
                application is now under review, and we will be in touch soon.
              </p>
            </div>

            <div className="rounded-xl border border-primary-200 bg-white p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-primary-900 mb-8">
                Next Steps
              </h2>
              <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-3">
                <div className="flex flex-col items-center gap-5 rounded-xl bg-gradient-to-b from-primary-50 to-white p-6 text-center border border-primary-100 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-primary-500 to-primary-600 shadow-lg">
                    <View />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-bold text-primary-900">
                      Review Process
                    </h3>
                    <p className="text-sm text-primary-700 leading-relaxed">
                      Our team will carefully review your application and
                      interview performance.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-5 rounded-xl bg-gradient-to-b from-primary-50 to-white p-6 text-center border border-primary-100 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-primary-500 to-primary-600 shadow-lg">
                    <MailCheck />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-bold text-primary-900">
                      Communication
                    </h3>
                    <p className="text-sm text-primary-700 leading-relaxed">
                      We will keep you updated on the progress via email at{" "}
                      <span className="font-medium text-primary-900">
                        {interviewInfo?.userEmail}
                      </span>
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-5 rounded-xl bg-gradient-to-b from-primary-50 to-white p-6 text-center border border-primary-100 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-primary-500 to-primary-600 shadow-lg">
                    <UserCheck2 />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-bold text-primary-900">
                      Decision Timeline
                    </h3>
                    <p className="text-sm text-primary-700 leading-relaxed">
                      You will receive a final decision within 2-3 business
                      days.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center pt-4">
              <Link href="/dashboard">
                <Button className="inline-flex min-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-8 bg-gradient-to-r from-primary-500 to-primary-600 text-blue-500 text-base font-bold leading-normal tracking-[0.015em] hover:from-primary-600 hover:to-primary-700 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:text-white">
                  Return to Dashboard
                </Button>
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default InterviewComplete;
