import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import "./header.css";

// '<p> <marquee behavior="scroll" direction="up">Welcome to Special Graphics!</marquee></p>'

const Header = () => {
    const [text, setText] = useState("Welcome to Special Graphics!");
    const [name, setName] = useState(0);
    useEffect(() => {
        const int = setInterval(() => {
            setName(name + 1);
            if (name % 2 == 0) {
                setText("Get 20% off your first design project.");

            }
            if (name % 2 == 1) {
                setText("Welcome to Special Graphics!")
            }
        }, 3000)
    })




    return (
        <div className='maindiv'>
            <div className="firstcontainer">
                <ul>

                    <li ><NavLink to='/about' style={{ listStyle: "none", textDecoration: "none", color: "black" }} >About Us</NavLink> </li>
                    <li><NavLink to='/customer' style={{ listStyle: "none", textDecoration: "none", color: "black" }}>Customer Support</NavLink></li>
                    <li><p>{text} </p> </li>
                    <li className='listlog'><NavLink to='/log' style={{ listStyle: "none", textDecoration: "none", color: "black" }}>Log</NavLink></li>


                </ul>
            </div>
            {/* <hr /> */}
            <div className="secondcontainer">
                <ul>
                    <li style={{ listStyle: "none", textDecoration: "none" }}><NavLink to='/' ></NavLink></li>
                </ul>

            </div>

        </div>
    )
}

export default Header
