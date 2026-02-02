import React from 'react'

const Card = () => {

    const name = "Himanshu";
    const age = 20;

  return (
    <>
      <div className="card">
        <h1>Hello, I am {name}! I am {age} years old.</h1>
      </div>
    </>
  );
}

export default Card