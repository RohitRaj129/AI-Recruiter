"use client";
import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { Clock, Info, Loader2Icon, Video } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useParams, useRouter } from "next/navigation";
import { supabase } from "@/services/supabaseClient";
import { toast } from "sonner";
import { InterviewDataContext } from "@/context/InterviewDataContext";

function Interview() {
  const { interview_id } = useParams();
  console.log(interview_id);
  const [interviewData, setInterviewData] = useState();
  const [userName, setUserName] = useState();
  const [loading, setLoading] = useState(false);
  const { interviewInfo, setInterviewInfo } = useContext(InterviewDataContext);
  const router = useRouter();

  useEffect(() => {
    interview_id && GetInterviewDetails();
  }, [interview_id]);

  const GetInterviewDetails = async () => {
    setLoading(true);
    try {
      let { data: Interviews, error } = await supabase
        .from("Interviews")
        .select("jobPosition,jobDescription,duration,type")
        .eq("interview_id", interview_id);
      setInterviewData(Interviews[0]);
      // console.log(Interviews);
      setLoading(false);
      if (Interviews?.length == 0) {
        toast("Incorrect Interview Link");
      }
    } catch (e) {
      setLoading(false);
      toast("Incorrect Interview Link");
    }
  };

  const onJoinInterview = async () => {
    setLoading(true);
    let { data: Interviews, error } = await supabase
      .from("Interviews")
      .select("*")
      .eq("interview_id", interview_id);

    console.log(Interviews[0]);
    setInterviewInfo({
      userName: userName,
      interviewData: Interviews[0],
    });
    router.push("/interview/" + interview_id + "/start");
    setLoading(false);
  };

  return (
    <div className="px-10 md:px-28 lg:px-48 xl:px-64 mt-16">
      <div className="flex flex-col items-center justify-center border rounded-lg bg-white p-7 lg:px-32 xl:px-52 mb-20">
        <Image
          src={"/logo.svg"}
          alt="Logo"
          width={200}
          height={100}
          className="w-[140px]"
        />
        <h2 className="mt-3">AI-Powered Interview Platform</h2>
        <Image
          src={"/interview.png"}
          alt="interview"
          width={500}
          height={500}
          className="w-[280px] my-6"
        />
        <h2 className="font-bold text-lg">{interviewData?.jobPosition}</h2>
        <h2 className="flex gap-2 items-center text-gray-300 mt-3">
          <Clock className="h-4 w-4" />
          {interviewData?.duration}
        </h2>

        <div className="w-full">
          <h2 className="font-medium my-3">Enter your Full Name</h2>
          <Input
            placeholder="e.g. Ramesh Kumar"
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="p-3 bg-blue-100 flex gap-4 rounded-lg mt-7">
          <Info className="text-primary" />
          <div>
            <h2 className="font-bold">Before you begin</h2>
            <ul>
              <li className="text-sm text-primary">
                Ensure you have a stable internet connection.
              </li>
              <li className="text-sm text-primary">
                Test your camera and microphone.
              </li>
              <li className="text-sm text-primary">
                Find a quiet place for interview.
              </li>
            </ul>
          </div>
        </div>
        <div>
          <Button
            className={"mt-5 w-full font-bold"}
            disabled={loading || !userName}
            onClick={() => onJoinInterview()}
          >
            <Video />
            {loading && <Loader2Icon />}Join Interview
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Interview;
