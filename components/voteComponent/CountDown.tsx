"use client"
import React, { useState, useEffect } from 'react';
import { IoIosTimer } from "react-icons/io";

const Countdown = ({ targetDate }:{targetDate:any}) => {
  const calculateTimeRemaining = () => {
    const now = new Date().getTime();
    const targetTime = new Date(targetDate).getTime();
    const timeRemaining = targetTime - now;

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  };

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='flex text-2xl items-center text-stone-400 font-mono select-none'>
        <IoIosTimer className="mr-2" />
      <div>{timeRemaining.days}D:</div>
      <div>{timeRemaining.hours}H:</div>
      <div>{timeRemaining.minutes}M:</div>
      <div>{timeRemaining.seconds}S</div>
    </div>
  );
};

export default Countdown;
