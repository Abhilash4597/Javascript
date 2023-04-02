import React, { useState } from 'react';
import '../useState.css';

export default function CurrentTime() {
  let newTime = new Date();
  let curTime =
    newTime.getHours() +
    ':' +
    newTime.getMinutes() +
    ':' +
    newTime.getSeconds();

  const [time, setTime] = useState(curTime);

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

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={refreshTime}>Get Time</button>
    </div>
  );
}
