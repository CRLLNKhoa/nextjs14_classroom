import React from 'react'
import { Skeleton } from '../ui/skeleton'
import { Button } from '../ui/button'
import { IoSend } from 'react-icons/io5'

export default function LoadingVote() {
  return (
    <div className='flex min-h-[400px] flex-col py-4 gap-2'>
        <Skeleton className='h-8' />
        <Skeleton className='h-8 w-1/2' />
        <Skeleton className='h-8 w-2/3  ml-auto' />
        <Skeleton className='h-8 ' />
        <Skeleton className='h-8 w-2/5' />
        <Skeleton className='h-8 w-4/5 ml-auto' />
        <Skeleton className='h-8 ' />
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
          >
            <IoSend className="w-5 h-5" />
          </Button>
        </div>
        <div className="flex flex-col gap-4 cmt-box pr-1 mt-4">
        <Skeleton className='h-8 w-[200px]' />
        <Skeleton className='h-8 w-1/2' />
        <Skeleton className='h-8 w-[800px]' />
        </div>
        <Button className="mx-auto w-[120px] mt-4">Load more</Button>
      </div>
    </div>
    </div>
  )
}
