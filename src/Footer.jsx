import React from 'react'
import "./footer.css"

const Footer = () => {
    return (
        <div className="fullfooter">
            <div className="above">
                <div className="firstabove">
                    <p>Company</p>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Careers</li>
                    <li>Team</li>
                    <li>Press releases</li>
                    <li>submit Projects</li>


                </div>
                <div className="secondabove">
                    <p>Categories</p>
                    <li>Logo & Brand</li>
                    <li>Web & App Design</li>
                    <li>Business & Advertising</li>
                    <li>clothing & Merchandise</li>
                    <li>Packaging & Label</li>
                    <li>Magazin & Book Covers</li>


                </div>
                <div className="thirdabove">
                    <p>Get a Design</p>
                    <li>Logo Design</li>
                    <li>Business  Card</li>
                    <li>Web Design</li>
                    <li>Package/Label Design</li>
                    <li>Brand Design</li>
                    <li>T-Shirt Design</li>
                    <li>Book Cover Design</li>
                    <li>Browse all categories</li>

                </div>
                <div className="fourthabove">
                    <p>Info</p>

                    <li>FAQ</li>
                    <li>About Us</li>
                    <li>Customer Support</li>

                </div>
                <div className="fifthabove">
                    <p>Become a Designer</p>
                    <li>Advance Package Design</li>
                    <li>Advance Logo Designj</li>
                    <li>Basics Of Graphics Design</li>
                    <li>Help</li>
                    <li>Logo Ideas</li>
                    <li>Become a Designer</li>
                    <li>Designer Resources</li>



                </div>


            </div>

            <hr className='linebreak' />
            <div className="below">
                <div className="someinfo">
                    <p>Special Graphics </p>
                    <a href="#">info@specialgraphics.us</a>
                    <p>Terms and Conditions </p>
                    <p>Privacy</p>
                    <p>English Español</p>
                </div>
                <div className="social">
                    <li> <i class="fa fa-facebook"></i></li>
                    <li> <i class="fa fa-twitter"></i></li>
                    <li> <i class="fa fa-instagram"></i></li>
                    <li> <i class="fa fa-linkedin"></i></li>
                    <li><i class="fa fa-pinterest"></i></li>

                </div>

            </div>
        </div>
    )
}

export default Footer
