import React from "react";
import { news } from "@/test/new";
import { format } from "date-fns";

export default function News() {
  return (
    <div className="hidden lg:flex flex-col p-4 border-l border-slate-800 overflow-y-auto">
      <h1 className="mb-4 font-bold">📑 Tin tức</h1>
      <div className="flex-1 overflow-y-auto notscroll">
        <div className="flex flex-col gap-4">
          {news.articles.map((item: any) => (
            <CardNew
              key={item.url}
              data={item}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function CardNew({ data }: any) {
  return (
    <div className="flex flex-col w-full rounded-lg overflow-hidden cursor-pointer">
      <div className="h-[160px] group w-full relative">
        <img
          className="h-full w-full object-cover duration-1000 group-hover:scale-125"
          src={data.urlToImage}
          alt="img"
        />
        <span className="absolute bg-black p-1 top-0 rounded-es-lg right-0 text-xs text-white font-bold">
          {data.author}
        </span>
        <div
          className="absolute bg-black p-2 left-0 
        right-0 h-[40%] bottom-0 duration-500 text-white flex flex-col justify-between"
        >
          <h2 className=" line-clamp-2 font-bold text-xs leading-3">
            {data.title}
          </h2>
          <p className="text-xs">{format(new Date(data.publishedAt), "dd/MM/yyyy")}</p>
        </div>
      </div>
    </div>
  );
}
