import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ targetDate }) => {
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining(targetDate));

  function calculateTimeRemaining(targetDate) {
    const now = new Date();
    const targetTime = new Date(targetDate);
    const timeDiff = targetTime - now;

    if (timeDiff <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const countdownStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const unitStyles = {
    fontSize: '3rem',
    fontWeight: 'bold',
    margin: '0 10px', // Adjust the spacing between units as needed
  };

  return (
    <div style={countdownStyles}>
      <span style={unitStyles}>{timeRemaining.days}</span> days
      <span style={unitStyles}>{timeRemaining.hours}</span> hours
      <span style={unitStyles}>{timeRemaining.minutes}</span> minutes
      <span style={unitStyles}>{timeRemaining.seconds}</span> seconds
    </div>
  );
};

export default CountdownTimer;
