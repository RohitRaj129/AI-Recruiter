"use client";
import { Button } from "@/components/ui/button";
import { Copy, Send } from "lucide-react";
import moment from "moment";
import React, { useState } from "react";
import { toast } from "sonner";

function InterviewCard({ interview }) {
  const url = process.env.NEXT_PUBLIC_HOST_URL + "/" + interview?.interview_id;
  const [copied, setCopied] = useState(false);
  const onCopyLink = async () => {
    setCopied(true);
    await navigator.clipboard.writeText(url);
    toast("Link Copied to Clipboard! 🎉");
  };

  const onSend = () => {
    window.location.href = `mailto:rohitraj129848@gmail.com?subject=AI Recruiter Interview Link&body=Hi, I would like to share the interview link with you: ${url}`;
  };
  return (
    <div className="p-5 bg-white rounded-lg border">
      <div className="flex items-center justify-between">
        <div className="h-[40px] w-[40px] bg-primary rounded-full"></div>
        <h2 className="text-sm">
          {moment(interview?.created_at).format(" DD MMM yyy")}
        </h2>
      </div>
      <h2 className="mt-3 font-bold text-lg">{interview?.jobPosition}</h2>
      <h2 className="mt-2">{interview?.duration}</h2>
      <div className="grid grid-cols-2 gap-3 mt-5">
        <Button
          onClick={() => onCopyLink()}
          variant={"outline"}
          className={"w-full"}
        >
          <Copy /> {copied ? "Copied!" : "Copy Link"}
        </Button>
        <Button className={"w-full"} onClick={() => onSend()}>
          <Send /> Send
        </Button>
      </div>
    </div>
  );
}

export default InterviewCard;
