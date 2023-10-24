import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ targetDate }) => {
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

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
    const updateTimer = () => {
      setTimeRemaining(calculateTimeRemaining(targetDate));
    };

    // Update the timer immediately and then every second
    updateTimer();
    const timer = setInterval(updateTimer, 1000);

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
    margin: '0 10px',
  };

  return (
<div className="container text-center">
  <div className="row">
    <div className="col-md-3">
      <span style={unitStyles}>{timeRemaining.days}</span>
      <span>days</span>
    </div>
    <div className="col-md-3">
      <span style={unitStyles}>{timeRemaining.hours}</span>
      <span>hours</span>
    </div>
    <div className="col-md-3">
      <span style={unitStyles}>{timeRemaining.minutes}</span>
      <span>minutes</span>
    </div>
    <div className="col-md-3">
      <span style={unitStyles}>{timeRemaining.seconds}</span>
      <span>seconds</span>
    </div>
  </div>
</div>

  );
};

export default CountdownTimer;
