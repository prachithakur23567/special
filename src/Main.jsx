import React from 'react'
import png from "./images/allcart.png"
import "./main.css";
const Main = () => {
    return (
        <>
            <div className="fullcontainer">
                <div className="firstpart">
                    <h2>Start Your Dream Business with </h2>
                    <h1><span>World Class  <strong>Designs</strong></span></h1>
                    <p>No matter what your business needs, we can connect </p>
                    <h5> <span> you with a creative expert. What do you need to design?</span></h5>
                    <div className="btns">
                        <div className="btn1">
                            <strong>Popular:</strong> <button className='btn'>Brand Design</button>
                            <button className='btn'> Web Design</button>
                            <button className='btn'> Package Design</button>

                        </div>
                        <div className="btn2">
                            <button className='hirebtn'> Hire Us Now</button>
                        </div>
                    </div>

                </div>
                <div className="secondpart">
                    <div className="search">
                        <h4>Design for what you need</h4>
                        <form action="#" className='searching'>
                            <input type="text" placeholder="What do you need designed" name="search" />




                            <button type="submit"><i class="fa fa-search"></i>
                            </button>
                        </form>
                        <a href="#"> view All design categories</a>


                    </div>
                    <div className="carts">
                        <div className="cart1">
                            <img src="https://static.wixstatic.com/media/6271b2_12a098df09f04f3da078cf811883f3ab~mv2.jpg/v1/fill/w_344,h_344,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/image%203%20copy.jpg" alt=" cart1" />
                            <p>Logo & Branding Design</p>

                        </div>
                        <div className="cart2">
                            <img src="https://static.wixstatic.com/media/6271b2_20254b0310e84d3880368fbf3f196cc6~mv2.jpg/v1/fill/w_344,h_344,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/k.jpg" alt="cart2" />
                            <p>Business & Advertising</p>
                        </div>
                        <div className="cart3">
                            <img src="https://static.wixstatic.com/media/6271b2_6d38deaba0a84ee5bd3976724c64c675~mv2.jpg/v1/fill/w_344,h_344,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/33.jpg" alt="cart3" />
                            <p>Packaging & Label</p>
                        </div>
                        <div className="cart4">
                            <img src="https://static.wixstatic.com/media/6271b2_1de4ad3258ab4173b341bf4c1df16bb5~mv2.jpg/v1/crop/x_84,y_0,w_1832,h_1832/fill/w_344,h_344,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/new2.jpg" alt="cart4" />
                            <p>Website & App Design</p>
                        </div>
                        <div className="cart5">
                            <img src="https://static.wixstatic.com/media/6271b2_f8398a25dc1f4162979f46bed4dccd70~mv2.jpg/v1/fill/w_344,h_344,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/image%203%20copy.jpg" alt="cart5" />
                            <p>Art & Illustration</p>
                        </div>

                    </div>

                </div>
                <div className="thirdpart">
                    <div className="leftdiv">
                        <div className="all">
                            <h1>Work with creative experts you can trust</h1>
                            <p>Feel confident working with our designer community. All our designers are vetted creative experts who've worked with hundreds of businesses to bring their designs to life.</p>
                            <div className="logo-btn">
                                <button className='logobtn'>
                                    Logo & Branding Design
                                </button>
                                <button className='logostart'>Start Your Project Now <span> > </span></button>
                            </div>
                        </div>
                    </div>
                    <div className="imgright">
                        <img src="https://static.wixstatic.com/media/6271b2_eb70d0cd7ed347cbbdf4a051cb785bc7~mv2.png/v1/fill/w_1028,h_756,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/6271b2_eb70d0cd7ed347cbbdf4a051cb785bc7~mv2.png" alt="healthy" />
                        <p>City Bonfires Product Design </p>
                        <p>By Special Graphics</p>
                    </div>

                </div>
                <div className="fourthpart">
                    <div className="rightimage">
                        <img src={png} alt="k" />
                    </div>
                    <div className="righpara">
                        <div className="allinformation">
                            <h1>Work with creative experts you can trust</h1>
                            <p>Feel confident working with our designer community. All our designers are vetted creative experts who've worked with hundreds of businesses to bring their designs to life.</p>
                            <div className="logo-btnn">
                                <button className='logobtnn'>
                                    Logo & Branding Design
                                </button>
                                <button className='logostartt'>Start Your Project Now <span> > </span></button>
                            </div>
                        </div>

                    </div>

                </div>
                <div className="fifthpart">
                    <div className="rightimagess">
                        <div className="allleft">
                            <h1>Your business deserves great design!</h1>
                            <p>Logos, websites, packaging design and more. Our trusted designer community has helped thousands of businesses launch, grow, expand and rebrand with custom, professional design.</p>
                            <div className="show-btn">
                                <button className='showbtn'>
                                    Showcase
                                </button>
                                <button className='showstart'>Start Your Brand <span> > </span></button>
                            </div>
                        </div>
                    </div>
                    <div className="businessimage">
                        <img src="https://static.wixstatic.com/media/6271b2_dc8acd4e8d55457089331dbd820b9db7~mv2.jpg/v1/fill/w_830,h_890,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/6271b2_dc8acd4e8d55457089331dbd820b9db7~mv2.jpg" alt="business" />
                    </div>


                </div>
                <div className="sixthpart">
                    <div className="spiritualimage">
                        <div className="perfume">
                            <img src="https://static.wixstatic.com/media/6271b2_7b2e63eac3264771800700dbca7cb821~mv2.png/v1/fill/w_344,h_710,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/2bottle%20design%20copy.png" alt="spiritual" />
                        </div>
                        <div className="imagetwo">
                            <img src="https://static.wixstatic.com/media/6271b2_c5ac9b40cb47482691c3c70b5492961f~mv2.jpg/v1/fill/w_342,h_342,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3.jpg" alt="" />
                            <img src="https://static.wixstatic.com/media/6271b2_f1aa576991fe49d8a907876b2b4e76ee~mv2.jpg/v1/fill/w_342,h_342,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/2.jpg" alt="" />
                        </div>
                    </div>
                    <div className="paraspiritual">
                        <h1>Special Graphics is a platform with a good name and a very good service...</h1>
                        <p>where entrepreneurs can easily find the right design for their company. The book cover for us was a very important part of the success of the book. Therefore, we entrusted this to experts and ended up being very happy with the result."</p>
                        <div className="divfacebook">
                            <img src="https://static.wixstatic.com/media/6271b2_3515b6f3356d413991a5d7b392e739b1~mv2.png/v1/fill/w_99,h_95,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Untitled-1.png" alt="" />

                            <div className="infodiv">
                                <p>Richard Van Balen </p>

                                <span>Founder of Ethique Body, Florida</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Main
