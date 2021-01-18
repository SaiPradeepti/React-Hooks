import React, { useReducer } from 'react'

const ACTIONS = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
  RESET: 'reset'
}

const reducer = (state,action) => {
  switch(action.type){
    case ACTIONS.INCREMENT:
      return {count: state.count + 1}
    case ACTIONS.DECREMENT:
      return {count: state.count - 1}
    case ACTIONS.RESET:
      return {count: 0}
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, {count: 0})
  
  const increment = () => dispatch({ type: ACTIONS.INCREMENT });
  const decrement = () => dispatch({ type: ACTIONS.DECREMENT });
  const reset = () => dispatch({ type: ACTIONS.RESET });
  
  return (
    <>
      <div className="counterContainer">
        <div className="counter">
          <button onClick={decrement}>-</button>
          <span className="value">{state.count}</span>
          <button onClick={increment}>+</button>
        </div>
        <div className="resetConainer">
          <button className="reset" onClick={reset}>Reset</button>
        </div>      
      </div>
    </>
  );
}

export default App;
