import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="flex justify-center mr-12">
            <NavLink className={'mr-12 text-green-700 font-bold hover:text-green-500'} to='/' >Home</NavLink>
            <NavLink className={'mr-12 text-green-700 font-bold hover:text-green-500'} to='/reviews' >Reviews</NavLink>
            <NavLink className={'mr-12 text-green-700 font-bold hover:text-green-500'} to='/dashboard' >Dashboard</NavLink>
            <NavLink className={'mr-12 text-green-700 font-bold hover:text-green-500'} to='/blogs' >Blogs</NavLink>
            <NavLink className={'mr-12 text-green-700 font-bold hover:text-green-500'} to='/about' >About</NavLink>
        </nav>

    )
}
export default Navbar;