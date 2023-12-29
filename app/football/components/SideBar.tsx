"use client";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaRankingStar } from "react-icons/fa6";
import { IoTodayOutline } from "react-icons/io5";
import { SiPremierleague } from "react-icons/si";

export default function SideBar() {
  const pathname = usePathname();
  const router = useRouter()
  return (
    <div className="hidden lg:flex flex-col justify-center border-r border-slate-800 pt-4">
      <div
      onClick={() => router.push("/football")}
        className={cn(
          "flex items-center relative gap-4 cursor-pointer hover:bg-slate-100 hover:text-black p-4 duration-500",
          pathname === "/football" && "bg-slate-100 text-black"
        )}
      >
        <FaRankingStar className="w-6 h-6" />
        <h1>Bảng xếp hạng</h1>
      </div>
      <div
         onClick={() => router.push("/football/today")}
        className={cn(
          "flex items-center relative gap-4 cursor-pointer hover:bg-slate-100 hover:text-black p-4 duration-500",
          pathname === "/football/today" && "bg-slate-100 text-black"
        )}
      >
        <IoTodayOutline className="w-6 h-6" />
        <h1>Bóng đá hôm nay</h1>
      </div>
      <div
         onClick={() => router.push("/football/premier")}
        className={cn(
          "flex items-center relative gap-4 cursor-pointer hover:bg-slate-100 hover:text-black p-4 duration-500",
          pathname === "/football/premier" && "bg-slate-100 text-black"
        )}
      >
        <SiPremierleague className="w-6 h-6" />
        <h1>Lịch Premier League</h1>
      </div>
      <div
        onClick={() => router.push("/football/mancity")}
        className={cn(
          "flex items-center relative gap-4 cursor-pointer hover:bg-slate-100 hover:text-black p-4 duration-500",
          pathname === "/football/mancity" && "bg-slate-100 text-black"
        )}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/sco/e/eb/Manchester_City_FC_badge.svg"
          alt="logo"
          className="w-6 h-6"
        />
        <h1>Lịch đấu ManCity</h1>
      </div>
    </div>
  );
}
