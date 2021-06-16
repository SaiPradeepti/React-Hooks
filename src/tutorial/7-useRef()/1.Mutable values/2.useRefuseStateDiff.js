import React from 'react'
import { useState } from 'react';

const UseRefuseStateDiff = () => {
    const [count, setCount] = useState(0);
  
  const handle = () => {
    const updatedCount = count + 1;
    console.log(`Clicked ${updatedCount} times`);
    setCount(updatedCount);
  };

  console.log('I rendered!');

  return <button onClick={handle}>Click me</button>;
}

export default UseRefuseStateDiff
