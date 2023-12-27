import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { IoSend } from "react-icons/io5";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { TbEdit } from "react-icons/tb";
import { AiFillDelete } from "react-icons/ai";

const comment = [
  { id: 1, content: "cool", name: "LuongKhoa", time: new Date() },
];

export default function Comment() {
  const [cmts, setCmts] = useState<any>(comment);
  const [inputCmt, setInputCmt] = useState("");

  function handleAddCmt() {
    setCmts(
      cmts.concat({
        id: cmts.length + 1,
        name: "LuongKhoa",
        time: new Date(),
        content: inputCmt,
      })
    );
  }

  return (
    <div className="flex flex-col border mt-4 p-4 rounded-lg border-slate-600">
      <h1 className="mb-2 text-lg">Comment 😉</h1>
      <div className="p-4 rounded-lg flex flex-col">
        <div className="flex items-center w-full gap-4">
          <input
            type="text"
            className="flex-1 h-10 px-4 rounded-lg outline-none"
            placeholder="Comment..."
          />
          <Button
            className="h-10 text-black"
            size={"sm"}
            onClick={handleAddCmt}
          >
            <IoSend className="w-5 h-5" />
          </Button>
        </div>
        <div className="flex flex-col mt-2 cmt-box pr-1">
          {cmts?.length === 0 && (
            <p className="text-center mt-4">No one has commented yet</p>
          )}
          {cmts.map((cmt: { id: string | undefined }) => (
            <ItemComment key={cmt.id} />
          ))}
        </div>
        <Button className="mx-auto w-[120px] mt-4">Load more</Button>
      </div>
    </div>
  );
}

function ItemComment() {
  return (
    <div className="flex gap-2 py-4 w-full">
      <div className="flex gap-2 w-full">
        <Avatar className="w-10 h-10">
          <AvatarImage
            src="https://github.com/shadcn.png"
            alt="@shadcn"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex flex-col flex-1">
          <div className="flex justify-between items-center w-full">
            <div className="flex items-center gap-2">
              <h1>LuongKhoa</h1>
              <span>-</span>
              <p className="text-xs text-muted-foreground">Mon Dec 25 2023</p>
            </div>
            <Popover>
              <PopoverTrigger asChild>
                <span className="ml-auto hover:bg-stone-800 p-1 cursor-pointer rounded-md duration-500">
                  <BiDotsHorizontalRounded className={"w-5 h-5"} />
                </span>
              </PopoverTrigger>
              <PopoverContent align={"end"}>
                <div className="py-4  px-2 flex flex-col">
                  <h1 className="flex gap-2 items-center justify-between p-2 hover:bg-stone-800 cursor-pointer">
                    Edit <TbEdit />
                  </h1>
                  <h1 className="flex gap-2 items-center justify-between p-2 hover:bg-stone-800 cursor-pointer">
                    Delete <AiFillDelete />
                  </h1>
                </div>
              </PopoverContent>
            </Popover>
          </div>
          <p className="text-sm">i like it</p>
        </div>
      </div>
    </div>
  );
}
