import { useDispatch, useSelector } from "react-redux"
import { increment } from "./utility/counterSlice";
import { decrement } from "./utility/counterSlice";
import { Reset } from "./utility/counterSlice";

function App() {
  const dispatch = useDispatch()

  const data = useSelector((state) => state.counter)
  console.log(data.value);
  function handleInc(){
    dispatch(increment("kushal"))
  }
  function handleDec(){
    dispatch(decrement('kushal saxena'))
  }
  function handleReset(){
    dispatch(Reset('zero'))
  }

  return (
    <>
    <div>
      <h1>Helllo bhaiyyeee</h1>
      <h1>{data.value}</h1>
      <button onClick={handleInc}>Increment</button>
      <button onClick={handleDec}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
 
    </>
  )
}

export default App
