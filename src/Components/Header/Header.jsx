import Navbar from "./Navbar/Navbar.jsx";
import Hero from "./Hero/Hero.jsx";
import "./Header.css"

function Header() {
return(
    <div id="header" className="w-screen h-screen flex flex-row justify-center items-center">
        <Navbar/>
        <Hero/>
    </div>
)
}

export default Header