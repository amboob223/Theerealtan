import React from 'react'
import { Link } from "react-router-dom";
import { useState } from "react";
import Dropdown from './Dropdown';
import lg from "../images/wocktan.png"
function Navbar() {

    //we have to make state here to keep track of the dropdown
    const [dropdown, setDropdown] = useState(false)

    //we now make the state methods that corresppond to some type of event
    function onMouseOver() {
        setDropdown(true)
    }//when this is true we render the dropdown component

    const mousedip = () => {
        setDropdown(false)
    }

    return (
        <nav className="navc">
            <img src={lg} alt="logo" className="navpic" />
            <ul className="nav">
                <li>
                    <Link
                        to="/"
                        className='navlink'
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        to="/about"
                        className="navlink"
                    >
                        About
                    </Link>
                </li>
                <li
                    onMouseLeave={mousedip}>
                    <Link

                        className="navlink"
                        onClick={onMouseOver}
                    >
                        Language

                    </Link>
                    {dropdown && <Dropdown />}
                    {/* // this means if the state is true then do this here */}
                </li>
                <li>
                    {/* <Link
                        to="/shop"
                        className="navlink"
                    > */}
                    <a href="https://wocktancomshop.creator-spring.com/" className="navlink">
                        Shop
                    </a>

                    {/* </Link> */}
                </li>

                <li>
                    <Link
                        to="/contact"
                        className="navlink"
                    >
                        Contacts
                    </Link>
                </li>
            </ul>

        </nav>
    )
}

export default Navbar;