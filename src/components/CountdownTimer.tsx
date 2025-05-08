
import { useEffect, useState } from "react";

interface CountdownTimerProps {
  targetDate: Date;
  className?: string;
}

export default function CountdownTimer({ targetDate, className }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = Number(targetDate) - Number(new Date());
      
      if (difference <= 0) {
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        };
      }
      
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    };

    // Calculate initial time left
    setTimeLeft(calculateTimeLeft());

    // Set up the interval
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Clear the interval on component unmount
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className={`${className} flex space-x-4 justify-center`}>
      <div className="flex flex-col items-center">
        <div className="glass-card w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center text-xl sm:text-2xl font-bold animate-pulse-slow">
          {String(timeLeft.days).padStart(2, '0')}
        </div>
        <span className="text-xs mt-1 text-gray-400">Days</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="glass-card w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center text-xl sm:text-2xl font-bold animate-pulse-slow">
          {String(timeLeft.hours).padStart(2, '0')}
        </div>
        <span className="text-xs mt-1 text-gray-400">Hours</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="glass-card w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center text-xl sm:text-2xl font-bold animate-pulse-slow">
          {String(timeLeft.minutes).padStart(2, '0')}
        </div>
        <span className="text-xs mt-1 text-gray-400">Mins</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="glass-card w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center text-xl sm:text-2xl font-bold animate-pulse-slow">
          {String(timeLeft.seconds).padStart(2, '0')}
        </div>
        <span className="text-xs mt-1 text-gray-400">Secs</span>
      </div>
    </div>
  );
}
