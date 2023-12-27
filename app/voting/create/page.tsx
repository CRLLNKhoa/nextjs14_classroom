import Countdown from "@/components/voteComponent/CountDown";
import OnlineCount from "@/components/voteComponent/OnlineCount";
import React from "react";

const Completionist = () => <span>You are good to go!</span>;

export default function page() {
  return (
    <div className="flex flex-col py-4">
      <h1 className="text-2xl">React is a ?</h1>
      <Countdown targetDate={new Date(2023, 11, 28)} />
      <OnlineCount />
    </div>
  );
}
