import React, { useState } from "react";
import Link from "../Link/Link";
import { MenuIcon, XIcon } from '@heroicons/react/solid'

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const routes = [
        { id: 1, name: 'Home', link: '/' },
        { id: 2, name: 'Reviews', link: '/reviews' },
        { id: 3, name: 'Dashboard', link: '/dashboard' },
        { id: 4, name: 'Blogs', link: '/blogs' },
        { id: 5, name: 'About', link: '/about' }
    ]
    return (
        <nav className="bg-lime-300">
            <div onClick={() => setOpen(!open)} className="w-6 h-6 md:hidden">
                {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
            </div>
            <ul className={`md:flex justify-center absolute md:static bg-lime-300 w-full duration-500 ease-in ${open ? 'top-6' : 'top-[-120px]'}`}>
                {
                    routes.map(route => <Link
                        key={route.id}
                        route={route}
                    ></Link>)
                }
            </ul>
        </nav>
    )
}
export default Navbar;