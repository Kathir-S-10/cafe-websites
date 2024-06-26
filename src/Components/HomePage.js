import React from "react";
import img1 from '../Images/image (10).png';
import '../Styles/HomePage.css';
import belgiumchoco from '../Images/bel-choco.webp';
import icedbelgium from '../Images/iced-belgium.webp';
import belgiumchocolate from '../Images/belgium-choco.webp';
import { Link } from "react-router-dom";
import fb from '../Images/facebook.svg';
import insta from '../Images/instagram.svg';
import twitter from '../Images/twitter.svg';

const HomePage = () => {
    return (
        <div>
            <div className="img-border">
{/*  */}
                <div>

                </div>
{/*  */}
                <img src={img1} className="image1"></img>
                <div className="quote">
                    <p className="q1">EAT</p>
                    <p className="q2">GOOD</p>
                    <p className="q1">FEEL</p>
                    <p className="q2">GOOD</p>
                </div>
                {/* latest offering */}
                <div>
                    <p className="heading1">Latest Offering</p>
                </div>
                <div className="box">
                    <div className="box1">
                        <div className="in-box1">
                            <img src={belgiumchoco}></img>
                            <div className="box-content">
                                <p className="dish-name">Belgium Chocolate Frappuccino</p>
                                <p className="dish-content">Blend of decadent Belgian chocolate sauce and coffee with a whipped chocolate topping</p>
                                <p className="amount">₹ 504.25</p>
                                <Link className="add">ADD ITEMS</Link>
                            </div>
                        </div>
                    </div>

                    <div className="box1">
                        <div className="in-box1">
                            <img src={icedbelgium}></img>
                            <div className="box-content">
                                <p className="dish-name">Iced Belgium Chocolate Latte</p>
                                <p className="dish-content">Espresso with decadent Belgian chocolate sauce,
                                    mocha sauce and streamed milk served over ice</p>
                                <p className="amount">₹ 430.25</p>
                                <Link className="add">ADD ITEMS</Link>
                            </div>
                        </div>
                    </div>

                    <div className="box1">
                        <div className="in-box1">
                            <img src={belgiumchocolate}></img>
                            <div className="box-content">
                                <p className="dish-name">Belgium Chocolate Latte</p>
                                <p className="dish-content">Espresso with decadent Belgian chocolate sauce,
                                    mocha sauce and steamed milk.</p>
                                <p className="amount">₹ 420.25</p>
                                <Link className="add">ADD ITEMS</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <br></br>
                <div className="footer">
                    {/* location */}
                    <div className="location">
                        <p className="location-heading">Location</p>
                        <p className="loc1">
                            321,Anna Nagar, near tower
                            Chennai
                        </p>
                        <p className="loc1">
                            10, Adyar, Chennai
                        </p>
                    </div>

                    {/* btns */}
                    <div className="btns">
                        <Link to="/" className="btn1">HOME</Link>
                        <Link to="/Order" className="btn1">ORDER</Link>
                        <Link to="/Contact" className="btn1">CONTACT</Link>
                    </div>

                    {/* social media */}
                    <div className="social-media">
                        <p className="social-heading">Social media</p>
                        <img src={insta} className="social-logo"></img>
                        <img src={fb} className="social-logo"></img>
                        <img src={twitter} className="social-logo"></img>
                    </div>

                </div>
            </div>



        </div>
    )
}

export default HomePage