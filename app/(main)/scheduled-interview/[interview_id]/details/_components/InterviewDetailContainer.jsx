import { Calendar, Clock, Layers } from "lucide-react";
import moment from "moment";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function InterviewDetailContainer({ interviewDetail }) {
  const questionList = interviewDetail?.questionList;
  return (
    <div className="p-5 bg-white mt-5 rounded-lg">
      <h2>{interviewDetail?.jobPosition}</h2>
      <div className="mt-4 flex items-center justify-between lg:pr-52">
        <div>
          <h2 className="text-sm text-gray-500 flex gap-2 items-center">
            <Clock className="h-4 w-4" />
            Duration
          </h2>
          <h2 className="text-sm flex gap-2 font-bold items-center">
            {interviewDetail?.duration}
          </h2>
        </div>
        <div>
          <h2 className="text-sm text-gray-500 flex gap-2 items-center">
            <Calendar className="h-4 w-4" />
            Created On
          </h2>
          <h2 className="text-sm flex gap-2 font-bold items-center">
            {moment(interviewDetail?.created_at).format("DD MMM yyyy")}
          </h2>
        </div>
        {interviewDetail?.type && (
          <div>
            <h2 className="text-sm text-gray-500 flex gap-2 items-center">
              <Layers className="h-4 w-4" />
              Type
            </h2>
            <h2 className="text-sm flex gap-2 font-bold items-center">
              {JSON.parse(interviewDetail?.type)[0]}
            </h2>
          </div>
        )}
      </div>
      <div className="mt-5">
        <h2 className="font-bold">Job Description</h2>
        <p className="text-sm leading-6">{interviewDetail?.jobDescription}</p>
      </div>
      <div className="mt-5">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="font-bold">
              Interview Questions
            </AccordionTrigger>
            <AccordionContent>
              {questionList && (
                <div className="grid grid-cols-2 gap-3 mt-3">
                  {questionList.map((item, index) => (
                    <div key={index}>
                      <h2 className="text-xs">
                        {index + 1}. {item?.question}
                      </h2>
                    </div>
                  ))}
                </div>
              )}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}

export default InterviewDetailContainer;
