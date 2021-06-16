import React from 'react'
import { useRef } from 'react';

const LoggingButtonClicks = () => {
    const countRef = useRef(0);
  
  const handle = () => {
    countRef.current++;
    console.log(`Clicked ${countRef.current} times`);
  };

  console.log('I rendered!');

  return <button onClick={handle}>Click me</button>;
}

export default LoggingButtonClicks
