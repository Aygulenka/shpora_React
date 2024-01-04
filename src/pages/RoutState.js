import React, { useState } from 'react';
import './PagesCss/RoutState.css'
const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="counter-container">
      <button className="round-button" onClick={decrement}>-1</button>
      <p className="count-display">Счётчик: {count}</p>
      <button className="round-button" onClick={increment}>+1</button>
    </div>
  );
};

export default Counter;