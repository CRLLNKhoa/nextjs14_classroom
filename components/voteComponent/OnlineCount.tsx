import React from 'react'
import { FaRegUser } from 'react-icons/fa6'

export default function OnlineCount() {
  return (
    <div className="flex items-center gap-2 py-8">
        <div className="bg-green-500 p-2 rounded-full"></div>
        <p>1</p>
        <FaRegUser className="w-3 h-3" />
        <p>live on this vote channel</p>
      </div>
  )
}
