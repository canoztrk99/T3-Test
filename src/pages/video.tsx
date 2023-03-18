import { type NextPage } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";

const Video: NextPage = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [timer, setTimer] = useState(0);
  useEffect(() => {
    if (isRunning) {
      let a = setInterval(() => {
        setTime(time + 1);
      }, 1000);
      setTimer(a);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isRunning, time, timer]);

  return (
    <div>
      <h1 className="text-xl text-orange-600">Video</h1>
      <h2>{time}</h2>
      <h2>{isRunning.toString()}</h2>
      <div className="flex w-64 justify-evenly gap-x-2">
        <button
          onClick={() => {
            setIsRunning(true);
          }}
          className="rounded-xl border-2 border-yellow-500 bg-yellow-400 py-1 px-1 hover:border-yellow-300 hover:bg-yellow-200"
        >
          Start
        </button>
        <button
          onClick={() => {
            setIsRunning(false);
          }}
          className="rounded-xl border-2 border-zinc-600 bg-zinc-500 px-1 hover:border-zinc-400 hover:bg-zinc-200"
        >
          Pause
        </button>
        <button
          onClick={() => {
            setTime(0);
            setIsRunning(false);
          }}
          className="rounded-xl border-2 border-green-600 bg-green-500 px-1 hover:border-green-400 hover:bg-green-300"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Video;
