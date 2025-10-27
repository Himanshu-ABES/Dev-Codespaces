import React from 'react'
import './Counter.css'

const Counter = () => {
  const [value, setCount] = React.useState(0);
  return (
    <div className='counter-container'>
      <p id='para'>Current Value: {value}</p>
      <button id='increment' onClick={() =>{
        setCount(value + 1)
      }}>+</button>
      <button id='decrement' onClick={() =>{
        setCount(value - 1)
      }}>-</button>
    </div>
  )
}

export default Counter