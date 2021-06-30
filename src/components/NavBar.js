import React from 'react';
import {NavLink} from "react-router-dom";
import {SocialIcon} from "react-social-icons";


const NavBar = () => {
    return (
        <header className="bg-blue-500">
            <div className="container mx-auto px-20 flex justify-between">
                <nav className="flex">
                    <NavLink
                        to="/"
                        exact
                        activeClassName="text-white"
                        className="inline-flex items-center py-6 px-3 mr-4 text-blue-100 hover:text-white text-4xl font-bold cursive tracking-widest"
                    >
                        Shloimi
                    </NavLink>
                    <NavLink
                        to="/post"
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover:text-white"
                        activeClassName="text-red-100 bg-blue-700"
                    >
                        Blog Posts
                    </NavLink>
                    <NavLink
                        to="/project"
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover:text-white"
                        activeClassName="text-red-100 bg-blue-700"
                    >
                        Projects
                    </NavLink>
                    <NavLink
                        to="/about"
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover:text-white"
                        activeClassName="text-red-100 bg-blue-700"
                    >
                        About
                    </NavLink>
                </nav>
                <div className="inline-flex py-3 px-3 my-6">
                    <SocialIcon
                        url="https://www.facebook.com/shloimi.minkowicz"
                        className="mr-4"
                        target="_blank"
                        fgColor="#fff"
                        style={{height: 35, width: 35}}
                    />
                    <SocialIcon
                        url="https://www.linkedin.com/in/shloimi-minkowicz/"
                        className="mr-4"
                        target="_blank"
                        fgColor="#fff"
                        style={{height: 35, width: 35}}
                    />
                    <SocialIcon
                        url="https://github.com/shloimimink"
                        className="mr-4"
                        target="_blank"
                        fgColor="#fff"
                        style={{height: 35, width: 35}}
                    />
                </div>
            </div>
        </header>
    );
};

export default NavBar;