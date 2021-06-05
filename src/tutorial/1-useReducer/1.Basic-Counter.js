import React, { useReducer } from 'react'

const ACTIONS = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
  RESET: 'reset',
  ADDFIVE: 'addfive'
}

const reducer = (state,action) => {
  switch(action.type){
    case ACTIONS.INCREMENT:
      return {count: state.count + 1}
    case ACTIONS.DECREMENT:
      return {count: state.count - 1}
    case ACTIONS.RESET:
      return {count: 0}
    case ACTIONS.ADDFIVE:
      return {count: state.count + action.payload.amount}
    default:
      return state;
  }
}

const BasicCounter = () => {
    const [state, dispatch] = useReducer(reducer, {count: 0})
  
  const increment = () => dispatch({ type: ACTIONS.INCREMENT });
  const decrement = () => dispatch({ type: ACTIONS.DECREMENT });
  const reset = () => dispatch({ type: ACTIONS.RESET });
  const addFive = () => dispatch({ type: ACTIONS.ADDFIVE, payload: {amount: 5} })
  
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
        <div className="addFive">
          <button className="reset" onClick={addFive}>Add five</button>
        </div>      
      </div>
    </>
  );
}

export default BasicCounter;