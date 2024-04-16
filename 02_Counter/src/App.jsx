import React from 'react'
import { useState } from 'react'

const App = () => {

  const [counter, setCounter] = useState(0);


  const increaseValue = () => {
    setCounter(counter + 1);

  };
  const decreaseValue = () => {
    setCounter(counter - 1);
  };
  console.log("Clicked " + counter);


  return (
    <>
      <h1>Welcome to Counter</h1>
      <p> <i> Maximum count value is 20 </i>  </p>

      <h3>Counter : {counter}</h3>
      <button onClick={increaseValue} disabled={counter === 20}>+</button>
      <button onClick={decreaseValue} disabled={counter === 0} >-</button>

    </>
  )
}

export default App