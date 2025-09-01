import React, { useState, useEffect } from "react";
import { Timer as TimerIcon } from "lucide-react";

function Timer({ isRunning = false }) {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isRunning]);

  const formatTime = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const remainingSeconds = totalSeconds % 60;

    const format = (num) => num.toString().padStart(2, "0");

    return `${format(hours)}:${format(minutes)}:${format(remainingSeconds)}`;
  };

  return (
    <span className="flex gap-2 items-center font-medium">
      <TimerIcon className="w-5 h-5" />
      {formatTime(seconds)}
    </span>
  );
}

export default Timer;
