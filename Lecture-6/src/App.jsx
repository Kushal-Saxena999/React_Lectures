import { useState } from "react";

function App() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function formSubmit(e){
    e.preventDefault();
    console.log({ email, password});
    
  }
  function handleEmail(e){
    setEmail(e.target.value)
  }
  function handlePassword(e){
    setPassword(e.target.value);
  }
  

  return (
    <form>
      <input type="text" placeholder="email" onChange={handleEmail} value={email}/>
      <br />
      <br />
      <input type="text" placeholder="password" onChange={handlePassword} />
      <br />
      <br />
      <button onClick={formSubmit}>Login</button>
    </form>

  )
}

export default App
