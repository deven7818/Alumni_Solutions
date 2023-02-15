import React from 'react';
import "./navbarStyle.css";

import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
               <div className="container ">
               <a className="navbar-brand  " href="/">Alumni_Solutions</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
            
                        <li className="nav-item active">
                            <NavLink className="nav-link bgnav"exact to="/">Home</NavLink>
                        </li>
                        <li className="nav-item active">
                            <NavLink className="nav-link bgnav" to="/AboutDetails">About Us</NavLink>
                        </li>
                        <li className="nav-item active">
                            <NavLink className="nav-link bgnav" to="/ServiceDetails">Services</NavLink>
                        </li>
                        <li className="nav-item active">
                            <NavLink className="nav-link bgnav" to="/contact">Contact Us</NavLink>
                        </li> 
                    </ul>
                </div>
               </div>
            </nav>
            
        </div>
    )
}

export default Navbar;
