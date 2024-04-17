const Navbar = () => {

    return (
        <div className="flex justify-around items-center bg-transparent text-white fixed top-0 left-0 w-screen pt-1">
            <div className="logo inline-block text-3xl font-bold">
                <a href="/">Ulugut Hotel</a>
            </div>
            <div className="links inline-block">
                <ul className="flex">
                    <li className="pl-10 p-5"><a href="/">Home</a></li>
                    <li className="pl-10 p-5"><a href="/">About</a></li>
                    <li className="pl-10 p-5"><a href="/">Our Rooms</a></li>
                    <li className="pl-10 p-5"><a href="/">Contact</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;