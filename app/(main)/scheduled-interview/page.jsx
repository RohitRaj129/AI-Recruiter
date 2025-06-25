"use client";
import { useUser } from "@/app/provider";
import { supabase } from "@/services/supabaseClient";
import React, { useEffect, useState } from "react";
import InterviewCard from "../dashboard/_components/InterviewCard";
import { Plus, Video } from "lucide-react";
import { Button } from "@/components/ui/button";

function ScheduledInterview() {
  const userContext = useUser();
  const user = userContext?.user;
  const [interviewList, setInterviewList] = useState();

  useEffect(() => {
    user && GetInterviewList();
  }, [user]);

  const GetInterviewList = async () => {
    const res = await supabase
      .from("Interviews")
      .select(
        "jobPosition, duration, interview_id, interview-feedback(userEmail)"
      )
      .eq("userEmail", user?.email)
      .order("id", { ascending: false });

    console.log("Scheduled Interviews", res.data);
    setInterviewList(res.data);
  };

  return (
    <div className="mt-5">
      <h2 className="text-xl font-bold">
        Interview List with candidate report and feedback
      </h2>
      {interviewList?.length == 0 && (
        <div className="p-5 flex flex-col gap-3 items-center mt-5">
          <Video className="h-10 w-10 text-primary" />
          <h2>You don't have any interview created!</h2>
          <Button>
            <Plus />
            Create New Interview
          </Button>
        </div>
      )}
      {interviewList && (
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-5">
          {interviewList.map((interview, index) => (
            <InterviewCard
              interview={interview}
              key={index}
              viewDetail={true}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ScheduledInterview;
