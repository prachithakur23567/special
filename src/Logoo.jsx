import React, { useState } from 'react'
import "./logoo.css";
import { Dropdown } from 'rsuite';

const CustomDropdown = ({ ...props }) => (
    <Dropdown {...props}>
        <Dropdown.Item>Logo & Brand</Dropdown.Item>
        <Dropdown.Item>Packaging & Label</Dropdown.Item>
        <Dropdown.Item>Magazin & Book Covers</Dropdown.Item>
        <Dropdown.Item>Web & App Design</Dropdown.Item>
        <Dropdown.Item>Business & Advertising</Dropdown.Item>
        <Dropdown.Item>clothing & Merchandise</Dropdown.Item>

    </Dropdown>
);

const Logoo = () => {

    return (
        <div className='logodesign'>
            <img src="https://static.wixstatic.com/media/6271b2_6b5b71180f1c4c128b0d36e2d8d5ecdd~mv2.png/v1/fill/w_324,h_117,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/2d%20copy.png" alt="" />
            <ul>
                {/* <li>Browse catagories
                    
                </li> */}
                <li><CustomDropdown className="hello" title="Browse catagories" trigger="hover" /></li>
                <li>Become a Designer</li>
                <li>Special Studio</li>
                <li>Inspiration</li>
                <li>How It Works</li>
                <li>Buy Digital Graphics</li>
            </ul>
        </div>
    )
}

export default Logoo
