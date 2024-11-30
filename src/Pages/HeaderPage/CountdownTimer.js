import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  const initialTime = 29 * 60 + 60;

  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    if (time <= 0) return;

    const intervalId = setInterval(() => {
      setTime(time - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [time]);

  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, "0")}:${m
      .toString()
      .padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  return (
    <div
      style={{
        fontFamily: "monospace",
        fontSize: "1rem",
        marginLeft: "10px",
        color: "#1D1B20",
        opacity: "0.6",
      }}
    >
      {formatTime(time)}
    </div>
  );
};

export default CountdownTimer;
