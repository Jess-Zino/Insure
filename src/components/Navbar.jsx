import logo from "./images/logo.svg"

const Navbar = () => {
    const  nav = ["How we work","Blog","Account","View plans"];
  //  const logo = "./images/logo.svg";
  return (
    <nav>
    <img src={logo}/>
    <ul>
    {nav.map(navs => <li key={navs}>{navs}</li> )}
    </ul>
    </nav>
  )
}

export default Navbar