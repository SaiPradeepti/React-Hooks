import React, { useState, useReducer } from 'react'
function App() {
  const [count,setCount] = useState(0);
  
  const increment = () => setCount(prevCount => count+1);
  const decrement = () => setCount(prevCount => count-1);
  
  return (
    <>
      <div className="counterContainer">
        <div className="counter">
          <button onClick={decrement}>-</button>
          <span className="value">{count}</span>
          <button onClick={increment}>+</button>
        </div>
        <div className="resetConainer">
          <button className="reset" onClick={()=>setCount(0)}>Reset</button>
        </div>      
      </div>
    </>
  );
}

export default App;
