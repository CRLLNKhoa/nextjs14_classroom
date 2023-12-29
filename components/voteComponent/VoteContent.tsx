"use client";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { IoMdInformationCircleOutline } from "react-icons/io";

const test = [
  { title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ratione sequi adipisci eius ipsa minus aut dolorum repellat tempora nesciunt, perspiciatis accusantium nemo. Error dolore temporibus, quisquam nam libero ullam.", votes: 12 },
  { title: "Ruby", votes: 1 },
  { title: "JavaScript", votes: 1 },
  { title: "Ruby", votes: 4 },
  { title: "Python", votes: 1 },
  { title: "Java", votes: 5 },
];

export default function VoteContent() {
  const [data, setData] = useState(test);
  return (
    <div className="flex flex-col">
      <div className="flex flex-col">
        {data.map((item) => (
          <ItemVote
            key={item.title}
            data={item}
            totalVote={data.reduce((acc, item) => acc + item.votes, 0)}
            topVote={Math.max(...data.map(item => item.votes))}
          />
        ))}
      </div>
      <p className="flex items-center gap-2 mt-4 ml-auto">
        <IoMdInformationCircleOutline /> You voted for
        <p className="text-primary">Framework</p> on Tue Dec 26 2023 11:48:12 AM
      </p>
    </div>
  );
}

function ItemVote({
  data,
  totalVote,
  topVote,
}: {
  data: any;
  totalVote: number;
  topVote: number;
}) {
  return (
    <div className="flex items-center w-full group cursor-pointer">
      <h1 className=" w-1/3 line-clamp-2 text-lg break-words select-none" title={data?.title}>
        {topVote === data.votes && "🎉 "}{data.title}
      </h1>
      <div className="flex-1 flex items-center gap-2">
        <div className="py-3 pr-5 border-l border-zinc-400 flex-1">
          <div
            className={cn("h-10 border-y border-r rounded-e-xl relative transition-all group-hover:border-zinc-400", topVote === data.votes && "bg-primary")}
            style={{ width: `${Math.floor((data.votes / totalVote) * 100)}%` }}
          >
            <h1 className=" absolute top-1/2 -right-8  -translate-y-1/2 select-none">
              {data.votes}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
