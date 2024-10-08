
import { useContext } from "react";
import { useState, useEffect } from "react";
import userContext from "./utils/Context";

function App() {

  let [username ,setUsername] = useState("")

  useEffect(() => {
    //data fetching
    let data = "Kushal";
    setUsername(data);
  },[])

  return (
    <div style={{border :"2px solid red",padding : "20px"}}>
      <h1>App</h1>
      <GrandParent username ={username}/>
    </div>

  )
}

export default App

function GrandParent({username}){

  return (
    <div style={{border :"2px solid grey",padding : "20px"}}>
      <h1>GrandParent</h1>
      <Parent username = {username} />
    </div>
  )
}

function Parent({username}){

  return (
    <userContext.Provider value={username}>
    <div style={{border :"2px solid black",padding : "20px"}}>
      <h1>Parent</h1>
      <Child username ={username}/>
    </div>
    </userContext.Provider>
  );
}

function Child({username}){

  let name = useContext(userContext)
  console.log(name)

  return (
    <div style={{border :"2px solid orange",padding : "20px"}}>
      <h1>Child</h1>
      <h2>{username}</h2>
    </div>
  )
}

