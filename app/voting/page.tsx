"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import React from "react";
import { votes } from "@/test/vote";

export default function Page() {
  return (
    <>
      <div className="flex flex-col my-6">
        <h1 className="text-green-500 font-semibold">Active votes 📣</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 my-4 gap-8">
          {votes.map((item) => (
            <VoteCard
              key={item.id}
              image={item.image}
              owner={item.owner}
              id={item.id}
              title={item.title}
              time={new Date(item.time)}
              emoji={item.emoji}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col my-6">
        <h1 className="text-red-500 font-semibold">Pass votes ❌</h1>
        <div className="grid grid-cols-3 my-4 gap-8">
          {votes.map((item) => (
            <VoteCard
              key={item.id}
              image={item.image}
              owner={item.owner}
              id={item.id}
              title={item.title}
              time={new Date(item.time)}
              emoji={item.emoji}
            />
          ))}
        </div>
      </div>
    </>
  );
}

interface IVoteCartProps {
  image: string | undefined;
  owner: string | undefined;
  id: string | undefined;
  title: string | undefined;
  time: any;
  emoji: string | undefined;
}

import { format, isAfter } from "date-fns";
import { useRouter } from "next/navigation";

function VoteCard({
  image = "",
  owner = "",
  id = "",
  title = "",
  time = "",
  emoji = "",
}: IVoteCartProps) {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/voting/${id}`)}
      className="group relative select-none"
    >
      <div
        className="border border-zinc-600 rounded-md px-4 py-2 space-y-3 bg-zinc-800
       group-hover:translate-x-2 group-hover:translate-y-2 transition-all 
       relative duration-500 cursor-pointer flex flex-col"
      >
        <span className="absolute -top-5 right-4 text-4xl">{emoji}</span>
        <div className="flex gap-4 items-center">
          <Avatar className="w-8 h-8 ring-2 ring-green-600">
            <AvatarImage
              src={image}
              alt={owner}
            />
            <AvatarFallback>VN</AvatarFallback>
          </Avatar>
          <h1 className="font-bold text-muted-foreground text-sm truncate">
            {owner}
          </h1>
        </div>
        <h1 className="line-clamp-2 text-lg font-semibold">{title}</h1>
        <span className="text-xs mt-2 text-muted-foreground">
          Until {format(time, "dd-MM-yyyy")}
        </span>
      </div>
      <div
        className={cn(
          "-z-10 absolute top-0 right-0 translate-x-2 translate-y-2 w-full h-full ring-1 rounded-md ring-green-500 bg-green-500 bg-opacity-10",
          time > new Date().getTime() && "ring-red-500 bg-red-500"
        )}
      ></div>
    </div>
  );
}
