"use client"
import React from "react";
import Link from "next/link";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { IoLockOpenOutline, IoSettingsOutline } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useRouter } from "next/navigation";

export default function Nav() {
  const router = useRouter()
  return (
    <div className="flex items-center justify-between border-b border-slate-800 pb-4">
      <Link
        href="/voting"
        className="flex gap-2 items-center font-bold"
      >
        <h1>VoteDaily 📥</h1>
      </Link>
      <Popover>
        <PopoverTrigger
          asChild
          className="hover:bg-red-500"
        >
          <Avatar className="w-8 h-8 cursor-pointer">
            <AvatarImage
              src="https://github.com/shadcn.png"
              alt="@shadcn"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </PopoverTrigger>
        <PopoverContent align="end">
          <div className="flex flex-col py-4 px-2">
            <div onClick={() => router.push("/voting/profile")} className="text-xs flex justify-between items-center cursor-pointer p-2 hover:bg-slate-900 duration-500">
              <h5>Profile</h5>
              <IoSettingsOutline className="w-4 h-4" />
            </div>
            <div onClick={() => router.push("/voting/create")} className="text-xs flex justify-between items-center cursor-pointer p-2 hover:bg-slate-900 duration-500">
              <h5>Create</h5>
              <IoMdAdd className="w-4 h-4" />
            </div>
            <div className="text-xs border-t border-slate-800 mt-4 flex justify-between items-center cursor-pointer p-2 pt-4 hover:bg-slate-900 duration-500">
              <h5>Logout</h5>
              <IoLockOpenOutline className="w-4 h-4" />
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
