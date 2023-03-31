import React from 'react';

export default function StylePractice() {
  let currTime = new Date();
  let currHour = currTime.getHours();
  // console.log(currHour);

  let wishing;
  let customStyle = {
    color: 'white',
  };

  if (currHour < 12) {
    wishing = 'Good Morning';
    customStyle.color = 'lightblue';
  } else if (currHour < 16) {
    wishing = 'Good Afternoon';
    customStyle.color = 'yellow';
  } else if (currHour < 20) {
    wishing = 'Good Evening';
    customStyle.color = 'orange';
  } else {
    wishing = 'Good Night';
    customStyle.color = 'darkblue';
  }

  return (
    <>
      <h1 style={customStyle}>{wishing}</h1>
    </>
  );
}
