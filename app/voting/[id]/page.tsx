"use client";
import Comment from "@/components/voteComponent/Comment";
import Countdown from "@/components/voteComponent/CountDown";
import LoadingVote from "@/components/voteComponent/LoadingVote";
import OnlineCount from "@/components/voteComponent/OnlineCount";
import VoteContent from "@/components/voteComponent/VoteContent";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Page() {
  const [isClient, setIsClient] = useState(false)
  const { id } = useParams();
  useEffect(() => {
    setIsClient(true)
  }, [])

  if(!isClient){
    return(
      <LoadingVote />
    )
  }

  return (
    <div className="flex flex-col py-4">
    <h1 className="text-2xl">React is a ?</h1>
    {isClient && <Countdown targetDate={new Date(2023, 11, 28)} />}
    <OnlineCount />
    <div className="grid grid-cols-1">
      <VoteContent />
      <Comment />
    </div>
  </div>
  );
}
