import { Button } from "@/components/ui/button";
import moment from "moment";
import React from "react";
import CandidateFeedbackDialog from "./CandidateFeedbackDialog";

function CandidateList({ candidateList }) {
  return (
    <div>
      <h2 className="font-bold my-5">Candidates ({candidateList?.length})</h2>
      {candidateList?.map((candidate, index) => (
        <div
          key={index}
          className="p-5 flex gap-3 items-center justify-between bg-white rounded-lg my-3 "
        >
          <div className="flex items-center gap-5">
            <h2 className="bg-primary p-3 px-4.5 font-bold text-white rounded-full">
              {candidate?.userName?.[0] || "U"}
            </h2>
            <div>
              <h2 className="font-semibold">{candidate?.userName}</h2>
              <h2 className="text-sm text-gray-500">
                Completed On:{" "}
                {moment(candidate?.created_at).format("MMM DD yyyy")}
              </h2>
              {/* <p className="text-sm text-gray-500">{candidate?.userEmail}</p> */}
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <h2
              className={`${
                candidate?.feedback?.feedback?.Recommendation == "No"
                  ? "text-red-500"
                  : "text-green-500"
              }`}
            >
              {candidate?.feedback?.feedback?.overallRating}/10
            </h2>
            <CandidateFeedbackDialog candidate={candidate} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default CandidateList;
