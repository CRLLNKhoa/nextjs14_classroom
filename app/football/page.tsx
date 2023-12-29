import React from "react";
import { bxh } from "@/test/bxh";

export default function page() {
  return (
    <div className="flex flex-col p-4">
      <h1 className="text-xl font-bold mb-8 text-center">Bảng xếp hạng Premier League {bxh.filters.season}</h1>
      <div className="flex justify-between mt-4 border-b">
        <h1 className="w-2/6">Câu lạc bộ</h1>
        <h1 className="w-[80px] text-center">Số trận</h1>
        <h1 className="w-[60px] text-center">Thắng</h1>
        <h1 className="w-[60px] text-center">Hòa</h1>
        <h1 className="w-[60px] text-center">Thua</h1>
        <h1 className="w-[100px] text-center">Bàn thắng</h1>
        <h1 className="w-[100px] text-center">Bàn thua</h1>
        <h1 className="w-[80px] text-center">Hiệu số</h1>
        <h1 className="w-[80px] text-center">Điểm</h1>
      </div>
      {bxh?.standings[0].table.map((item) => (
        <div
          key={item.position}
          className="flex justify-between border-b border-slate-800 items-center p-2"
        >
          <div className="w-2/6 flex gap-2 items-center">
            <p className="text-xs">{item.position}</p>

            <img
              src={item.team.crest}
              alt={item.team.crest}
              className="w-6 h-6"
            />

            <h2 className="text-sm font-bold">{item.team.shortName}</h2>
          </div>
          <h1 className="w-[80px] text-center">{item.won}</h1>
          <h1 className="w-[60px] text-center text-green-500">{item.won}</h1>
          <h1 className="w-[60px] text-center text-orange-500">{item.draw}</h1>
          <h1 className="w-[60px] text-center text-red-500">{item.lost}</h1>
          <h1 className="w-[100px] text-center">{item.goalsFor}</h1>
          <h1 className="w-[100px] text-center">{item.goalsAgainst}</h1>
          <h1 className="w-[80px] text-center">{item.goalDifference}</h1>
          <h1 className="w-[80px] text-center">{item.points}</h1>
        </div>
      ))}
    </div>
  );
}
