import { useRef } from "react";

function Uncontrolled(){
  const [data, setData] = useState({email: "", password: ""});

  let emailRef = useRef();
  let passRef = useRef();
  

  function formSubmit(e){
    e.preventDefault();
    console.log(data);
    
  }
    
  
    return (
      <>
      <h1 >Uncontrolled</h1>
      <form>
        <input type="text" placeholder="email" ref={emailRef} />
        <br />
        <br />
        <input type="text" placeholder="password" ref={passRef} />
        <br />
        <br />
        <button onClick={formSubmit}>Login</button>
      </form>
      </>
  
    )
  
}

export default Uncontrolled