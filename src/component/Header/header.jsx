import React from "react";
import { Link } from "react-router-dom";



const Header = () =>{
    return(
        <header className="flex justify-center gap-[210%] w-full h-16 items-center">
            <h1 className="text-4xl font-bold text-white hover:text-slate-400"><Link to="/">Portfolio.</Link></h1>
            <nav className="lg:flex lg:items-center lg:space-x-6 w-full lg:w-auto mt-4 lg:mt-0">
                <ul className="flex flex-col lg:flex-row lg:space-x-6 font-bold text-white">
                    <li className="hover:text-slate-400"><Link to="/">Home</Link></li>
                    <li className="hover:text-slate-400"><Link to="/resume">Resume</Link></li>
                    <li className="hover:text-slate-400"><Link to="/about">About</Link></li>
                    <li className="hover:text-slate-400"><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;