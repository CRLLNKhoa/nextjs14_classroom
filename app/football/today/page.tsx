"use client"
import { format } from 'date-fns'
import React, { useEffect, useState } from 'react'
import { FaAngleRight } from 'react-icons/fa6'
import { IoMdTime } from 'react-icons/io'
import {today} from "@/test/today"
import { getMathchesFootball } from '@/api'

export default function Page() {
    const [data, setData] = useState<any>();

    const readData = async () => {
        try {
            const result = await getMathchesFootball()
            console.log(result)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        readData()
    }, []);

  return (
    <div className='flex flex-col p-4'>
        <h1 className='text-center font-bold text-xl'>Lịch đá bóng hôm nay</h1>
        <div className="flex flex-col gap-8 mt-4 lg:mt-8">
        {today.matches.map((item: any) => (
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
  )
}
