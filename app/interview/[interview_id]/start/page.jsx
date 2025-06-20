"use client";
import { useUser } from "@/app/provider";
import { InterviewDataContext } from "@/context/InterviewDataContext";
import { Mic, Phone, Timer } from "lucide-react";
import Image from "next/image";
import React, { useContext } from "react";

function StartInterview() {
  const { interviewInfo, setInterviewInfo } = useContext(InterviewDataContext);
  const userContext = useUser();
  const user = userContext?.user;
  return (
    <div className="p-20 lg:px-48 xl:px-56">
      <h2 className="font-bold text-xl flex justify-between">
        AI Interview Session
        <span className="flex gap-2 items-center">
          <Timer />
          00:00:00
        </span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-5">
        <div className="bg-white h-[400px] rounded-lg border flex flex-col gap-3 items-center justify-center">
          <Image
            src={"/AiAvatar.png"}
            alt="AI"
            width={100}
            height={100}
            className="w-[60px] h-[60px] rounded-full object-cover"
          />
          <h2>AI Recruiter</h2>
        </div>
        <div className="bg-white h-[400px] rounded-lg border flex flex-col gap-3 items-center justify-center">
          <Image
            src={user?.picture || "/user.png"}
            alt="AI"
            width={100}
            height={100}
            className="w-[60px] h-[60px] rounded-full object-cover"
          />
          <h2>{interviewInfo?.userName}</h2>
        </div>
      </div>
      <div className="flex justify-center items-center gap-5 mt-10">
        <Mic className="h-12 w-12 p-3 bg-gray-500 text-white rounded-full cursor-pointer" />
        <Phone className="h-12 w-12 p-3 bg-red-500 text-white rounded-full cursor-pointer" />
      </div>
      <h2 className="text-sm text-gray-400 text-center mt-5">
        Interview is in Progress...
      </h2>
    </div>
  );
}

export default StartInterview;
