"use client";
import React, { useEffect, useState } from "react";
import { FaAngleRight } from "react-icons/fa6";
import { mancity } from "@/test/mancity";
import { format } from "date-fns";
import { IoMdTime } from "react-icons/io";

export default function Page() {
  const [filter, setFilter] = useState<{
    PL: any;
    CL: any;
  }>({
    PL: [],
    CL: [],
  });
  useEffect(() => {
    function splitArrayByCode() {
      const PL = mancity.matches.filter(
        (item) => item.competition.code === "PL"
      );
      const CL = mancity.matches.filter(
        (item) => item.competition.code === "CL"
      );
      setFilter({
        CL: CL,
        PL: PL,
      });
    }
    splitArrayByCode();
  }, []);

  return (
    <div className="flex flex-col pb-8">
      <h1 className="text-center font-bold mb-4 mt-4 text-xl">
        Lịch thi đấu của Man City
      </h1>
      <h1 className="font-bold p-4 text-xl flex items-center gap-4">
        <div className="bg-white p-1 rounded-lg">
          <img
            src="https://crests.football-data.org/PL.png"
            className="w-6 h-6"
            alt=""
          />
        </div>
        Premier League
      </h1>
      <div className="flex flex-col gap-8 mb-4">
        {filter.PL.map((item: any) => (
          <div
            key={item.id}
            className="flex items-center py-2 px-4"
          >
            <p className="hidden lg:flex gap-1 items-center"><IoMdTime />{format(new Date(item.utcDate), "HH:mm dd/MM")}</p>
            <div className="flex flex-1 justify-center gap-4 items-center">
              <div className="flex gap-2 flex-1 justify-end">
                <p>{item.homeTeam.shortName}</p>
                <img
                  src={item.homeTeam.crest}
                  alt="logo"
                  className="w-6 h-6"
                />
              </div>

              {item.score.winner === null ? (
                <span className="relative text-white text-xs px-4 font-bold rounded-full">
                   <p className="lg:hidden absolute -top-6 -left-1/2 w-[100px] flex gap-1 items-center justify-center"><IoMdTime />{format(new Date(item.utcDate), "HH:mm dd/MM")}</p>
                  VS
                </span>
              ) : (
                <span className="relative bg-white text-black px-4 font-bold rounded-full">
                   <p className="lg:hidden absolute -top-6 text-white text-xs -left-1/3 w-[100px] flex gap-1 items-center justify-center"><IoMdTime />{format(new Date(item.utcDate), "HH:mm dd/MM")}</p>
                  {item.score.fullTime.home} - {item.score.fullTime.away}
                </span>
              )}
              <div className="flex gap-2 flex-1">
                <img
                  src={item.awayTeam.crest}
                  alt="logo"
                  className="w-6 h-6"
                />
                <p>{item.awayTeam.shortName}</p>
              </div>
            </div>
            <p className="hidden lg:block">
              <FaAngleRight />
            </p>
          </div>
        ))}
      </div>
      <h1 className="font-bold p-4 text-xl flex items-center gap-4">
        <div className="bg-white p-1 rounded-lg">
          <img
            src="https://crests.football-data.org/CL.png"
            className="w-6 h-6"
            alt=""
          />
        </div>
        UEFA Champions League
      </h1>
      <div className="flex flex-col gap-8 mt-4 lg:mt-0">
        {filter.CL.map((item: any) => (
         <div
         key={item.id}
         className="flex items-center py-2 px-4"
       >
         <p className="hidden lg:flex gap-1 items-center"><IoMdTime />{format(new Date(item.utcDate), "HH:mm dd/MM")}</p>
         <div className="flex flex-1 justify-center gap-4 items-center">
           <div className="flex gap-2 flex-1 justify-end">
             <p>{item.homeTeam.shortName}</p>
             <img
               src={item.homeTeam.crest}
               alt="logo"
               className="w-6 h-6"
             />
           </div>

           {item.score.winner === null ? (
             <span className="relative text-white text-xs px-4 font-bold rounded-full">
                <p className="lg:hidden absolute -top-6 -left-1/2 w-[100px] flex gap-1 items-center justify-center"><IoMdTime />{format(new Date(item.utcDate), "HH:mm dd/MM")}</p>
               VS
             </span>
           ) : (
             <span className="relative bg-white text-black px-4 font-bold rounded-full">
                <p className="lg:hidden absolute -top-6 text-white text-xs -left-1/3 w-[100px] flex gap-1 items-center justify-center"><IoMdTime />{format(new Date(item.utcDate), "HH:mm dd/MM")}</p>
               {item.score.fullTime.home} - {item.score.fullTime.away}
             </span>
           )}
           <div className="flex gap-2 flex-1">
             <img
               src={item.awayTeam.crest}
               alt="logo"
               className="w-6 h-6"
             />
             <p>{item.awayTeam.shortName}</p>
           </div>
         </div>
         <p className="hidden lg:block">
           <FaAngleRight />
         </p>
       </div>
        ))}
      </div>
    </div>
  );
}
