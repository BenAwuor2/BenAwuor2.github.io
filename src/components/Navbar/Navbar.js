import React, { useState } from "react";
import './Navbar.css';
import logo from '../../assets/logo.webp';
import contact from '../../assets/contact.png';
import {Link} from 'react-scroll';
import menu from "../../assets/mobMenu.png"

const Navbar = () => {
    const [showMenu, setshowMenu] = useState(false)
    return (
        <nav className="navbar">
            <img src={logo} alt="Logo" className="logo" />
            <div className="desktopMenu">
                <Link activeClass="active" to="intro" spy={true} smooth={true} duration={500} offset={-100} className="desktopMenuListItem">Home</Link>
                <Link activeClass="active" to="skills" spy={true} smooth={true} duration={500} offset={-50} className="desktopMenuListItem">About</Link>
                <Link activeClass="active" to="works" spy={true} smooth={true} duration={500} offset={-50} className="desktopMenuListItem">Portfolio</Link>
                {/* <Link activeClass="active" to="intro" spy={true} smooth={true} duration={500} offset={-100} className="desktopMenuListItem">Clients</Link> */}
            </div>
        <button className="desktopMenuBtn" onClick= {() => {
                document.getElementById('contactPage').scrollIntoView({behavior: 'smooth'})}
            }>
                <img src={contact} alt="" className="desktopMenuImg"/> Contact me
        </button>

        <img src={menu} alt="Menu" className="mobMenu" onClick={() => {setshowMenu(!showMenu)}}/>
            <div className="navMenu" style={{display:showMenu? 'flex': 'none'}}>
                <Link activeClass="active" to="intro" spy={true} smooth={true} duration={500} offset={-100} className="listItem" onClick={() => {setshowMenu(false)}}>Home</Link>
                <Link activeClass="active" to="skills" spy={true} smooth={true} duration={500} offset={-50} className="listItem" onClick={() => {setshowMenu(false)}}>About</Link>
                <Link activeClass="active" to="works" spy={true} smooth={true} duration={500} offset={-50} className="listItem" onClick={() => {setshowMenu(false)}}>Portfolio</Link>
                <Link activeClass="active" to="contactPage" spy={true} smooth={true} duration={500} offset={-100} className="listItem" onClick={() => {setshowMenu(false)}}>Contact</Link>
            </div>

        </nav>
    )

}

export default Navbar;