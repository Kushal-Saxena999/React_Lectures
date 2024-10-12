import React, {useEffect, useState} from 'react'

function FunctionCom({name}) {
  console.log({name});
  // let num = 6
  const[num,setNum] = useState(54);
  const[num2,setNum2] = useState(54);
  console.log("rendered")
  async function fetchData(){
    //fetching
    console.log("data fetching starts....")
  }
  // fetchData();

  // let timer = setInterval(() => {
  //   console.log("hello")
  // }, 1000)

  useEffect(()=> {
    fetchData();

    return function(){
      // clearInterval(timer)
    }
  }, [num])

  return (
    <div>
      <p>{console.log("dom rendered")}</p>
      <h1>{name}</h1>
      <h1>Functional Component</h1>
      <button onClick={() => setNum(num+1)}>increment</button>
      <p>{num}</p>
    </div>
  )
}

export default FunctionCom