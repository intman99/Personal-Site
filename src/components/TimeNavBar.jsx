import React, { useState } from "react";


function TimeBar() {

  setInterval(updateTime, 1000)

  const now = new Date().toLocaleTimeString();

  const [time, setTime] = useState(now)

  function updateTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime)
  }


  return (
  <div className="TimeNavBar">{time}</div>
)
}

export default TimeBar;
