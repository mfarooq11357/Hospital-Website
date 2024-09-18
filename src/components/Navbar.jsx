import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false);

    const handleToggle = () => {
      setIsMobile(!isMobile);
    };

    const handleCloseMenu = () => {
      if (isMobile) {
        setIsMobile(false);
      }
    };

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
{/*                     <a href="/" className="navbar-logo">
                      <img src="path/to/logo.png" alt="Logo" /> 
                    </a> */}
                     <div className="navbar-logo>
                         HealthCare Hub
                         </div>
                    <div className="menu-icon" onClick={handleToggle}>
                        {isMobile ? <FaTimes /> : <FaBars />}
                    </div>
                    <ul className={isMobile ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <NavLink
                                to="/"
                                className={(e)=>{return e.isActive?"red nav-links": "nav-links" }}
                                onClick={handleCloseMenu}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/services"
                                className={(e)=>{return e.isActive?"red nav-links": "nav-links" }}
                                onClick={handleCloseMenu}
                            >
                                Services
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/contact"
                                className={(e)=>{return e.isActive?"red nav-links": "nav-links" }}
                                onClick={handleCloseMenu}
                            >
                                Contact Us
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
