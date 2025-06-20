"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Clock, Copy, List, Mail, Plus } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { toast } from "sonner";

function InterviewLink({ interview_id, formData }) {
  const url = process.env.NEXT_PUBLIC_HOST_URL + "/" + interview_id;
  const GetInterviewUrl = () => {
    return url;
  };
  const [copied, setCopied] = useState(false);
  const onCopyLink = async () => {
    setCopied(true);
    await navigator.clipboard.writeText(url);
    toast("Link Copied to Clipboard! 🎉");
  };
  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <video src="/check.webm" autoPlay muted className="w-[75px] h-[75px]" />
      <h2 className="font-bold text-lg mt-4">Your AI Interview is Ready!</h2>
      <p className="mt-3">
        Share this link with your candidates to start the interview process.
      </p>
      <div className="w-full p-7 mt-6 rounded-lg bg-white">
        <div className="flex justify-between items-center">
          <h2 className="font-bold">Interview Link</h2>
          <h2 className="p-1 px-2 text-primary bg-blue-50 rounded-xl">
            Valid for 30 Days
          </h2>
        </div>
        <div className="mt-3 flex gap-3 items-center">
          <Input defaultValue={GetInterviewUrl()} disabled={true} />
          <Button onClick={() => onCopyLink()}>
            <Copy /> {copied ? "Copied!" : "Copy Link"}
          </Button>
        </div>
        <hr className="my-7" />
        <div className="flex gap-5">
          <h2 className="text-sm text-gray-500 flex gap-2 items-center">
            <Clock className="h-4 w-4" />
            {formData?.duration}
          </h2>
          <h2 className="text-sm text-gray-500 flex gap-2 items-center">
            <List className="h-4 w-4" />
            {/* {formData?.duration} */}
            10 Questions
          </h2>
          {/* <h2 className="text-sm text-gray-500 flex gap-2 items-center">
            <Clock className="h-4 w-4" /> 30 Min
            {formData?.duration}
          </h2> */}
        </div>
      </div>
      <div className="mt-7 bg-white w-full p-5 rounded-lg">
        <h2 className="font-bold text-lg mb-4">Share via</h2>
        <div className="flex gap-7 items-center">
          <Button variant={"outline"}>
            <Mail /> Email
          </Button>
          <Button variant={"outline"}>
            <Mail /> Whatsapp
          </Button>
        </div>
      </div>
      <div className="flex w-full gap-5 justify-between mt-6">
        <Link href={"/dashboard"}>
          <Button variant={"outline"}>
            <ArrowLeft /> Back to Dashboard
          </Button>
        </Link>
        <Link href={"/create-interview"}>
          <Button>
            <Plus /> Create New Interview
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default InterviewLink;
