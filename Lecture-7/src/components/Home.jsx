
import { Link, Outlet, useNavigate } from "react-router-dom"

function Home(){

  let navigation = useNavigate();

  // setTimeout(() => {
  //   navigation("/about")
  // }, 5000);
  return (
  <div className="w-screen h-screen bg-slate-300">
    <nav className="bg-blue-300 h-34 flex justify-evenly text-2xl">
      <Link to="/" ><h1>Logo</h1></Link>
      <div className="flex gap-10">
        <Link to={"/resume"}><p>Resume</p></Link>
        <Link to={"/project"}>Projects</Link>
        <Link to={"/about"}>About us</Link>
        <Link to={"/contact"}>Contact</Link>
      </div>
    </nav>
    <Outlet />
  </div>
  )
}

export default Home