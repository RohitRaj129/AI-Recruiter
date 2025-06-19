import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

function FormContainer() {
  return (
    <div className="p-5 bg-white rounded-2xl">
      <div className="mt-5">
        <h2 className="text-sm">Job Position</h2>
        <Input placeholder="e.g. Full Stack Developer" className="mt-2" />
      </div>
      <div className="mt-5">
        <h2 className="text-sm">Job Description</h2>
        <Textarea
          placeholder="Enter details of job description"
          className="mt-2 h-[200px]"
        />
      </div>
    </div>
  );
}

export default FormContainer;
