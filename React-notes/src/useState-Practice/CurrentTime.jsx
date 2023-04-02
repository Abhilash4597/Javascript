import React, { useState } from 'react';
import '../useState.css';

export default function CurrentTime() {
  // # Current Time
  let newTime = new Date();
  let curTime =
    newTime.getHours() +
    ':' +
    newTime.getMinutes() +
    ':' +
    newTime.getSeconds();
// # UseState
  const [time, setTime] = useState(curTime);

  // # Current Time Function for set the time
  const refreshTime = () => {
    let updateTime = new Date();
    let newUpdateTime =
      updateTime.getHours() +
      ':' +
      updateTime.getMinutes() +
      ':' +
      updateTime.getSeconds();
    setTime(newUpdateTime);
  };

  // # Continous working clock without refreshing
  setInterval(refreshTime, 1000);

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={refreshTime}>Get Time</button>
    </div>
  );
}
