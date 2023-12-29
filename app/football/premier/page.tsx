"use client";
import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { FaAngleRight } from "react-icons/fa6";
import { IoMdTime } from "react-icons/io";
import { mancity } from "@/test/mancity";

export default function Page() {
  const [data, setData] = useState<any>([]);

  function groupArrayByRound(inputArray: any) {
    const groupedArrays: any = {};

    // Duyệt qua mảng và nhóm các phần tử theo giá trị của thuộc tính "round"
    inputArray.forEach((item: any) => {
      const roundValue = item.matchday;

      if (!groupedArrays[roundValue]) {
        // Nếu chưa có mảng con cho giá trị "round" này, tạo một mảng mới
        groupedArrays[roundValue] = [];
      }

      // Thêm phần tử vào mảng con tương ứng với giá trị "round"
      groupedArrays[roundValue].push(item);
    });

    // Chuyển đổi đối tượng thành mảng để lấy kết quả cuối cùng
    const resultArray = Object.values(groupedArrays);

    return resultArray;
  }

  useEffect(() => {
    const req = groupArrayByRound(mancity.matches)
    setData(req)
  }, []);

  console.log(data)

  return (
    <div className="flex flex-col p-4">
      <h1 className="text-center text-xl font-bold mb-8">
        Lịch Premier League
      </h1>
      <div className="flex flex-col gap-8 mt-4 lg:mt-0">
        {data.map((matchday:any, index: number) => (
          <div key={index} className="flex flex-col gap-6">
            <h1>Vòng: {index + 1}</h1>
            {matchday.map((item: { id: React.Key | null | undefined; utcDate: string | number | Date; homeTeam: { shortName: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; crest: string | undefined; }; score: { winner: null; fullTime: { home: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; away: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; }; }; awayTeam: { crest: string | undefined; shortName: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; }; }) => <div
            key={item.id}
            className="flex items-center py-2 px-4"
          >
            <p className="hidden lg:flex gap-1 items-center">
              <IoMdTime />
              {format(new Date(item.utcDate), "HH:mm dd/MM")}
            </p>
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
                  <p className="lg:hidden absolute -top-6 -left-1/2 w-[100px] flex gap-1 items-center justify-center">
                    <IoMdTime />
                    {format(new Date(item.utcDate), "HH:mm dd/MM")}
                  </p>
                  VS
                </span>
              ) : (
                <span className="relative bg-white text-black px-4 font-bold rounded-full">
                  <p className="lg:hidden absolute -top-6 text-white text-xs -left-1/3 w-[100px] flex gap-1 items-center justify-center">
                    <IoMdTime />
                    {format(new Date(item.utcDate), "HH:mm dd/MM")}
                  </p>
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
          </div>)}
          </div>
        ))}
      </div>
    </div>
  );
}
