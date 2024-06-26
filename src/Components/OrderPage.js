import React from "react";
import '../Styles/OrderPage.css';
import { Link } from "react-router-dom";
import javachip from '../Images/java-chip.png';
import belgiumlatte from '../Images/belgium-choco-latte.png';
import belgiumchoco from '../Images/Belgium-chocolate.png';
import cookie from '../Images/choco-cookie.png';
import capuccino from '../Images/capuccino.png';
import coldcoffee from '../Images/cold coffee.png';
import coldamericano from '../Images/cold-americano.png';
import Gallery from "./Gallery";


const OrderPage = () => {
    return (
        <div>
            <h1 className="order-heading">Order</h1>
            <div className="order-box">

                {/*  */}
                <div className="o-box1">
                    <div className="dish-img">
                        <img src={javachip} className="items-img"></img>
                    </div>
                    <div>
                        <p className="item-title">Java Chip Frappuccino</p>
                        <p className="item-desc">Mocha sauce and Frappuccino® <br></br>chips blended.</p>
                        <p className="amounts">₹ 504.25</p>
                        <Link className="adds">ADD ITEMS</Link>
                    </div>
                </div>
                {/*  */}

                <div className="o-box1">
                    <div className="dish-img">
                        <img src={belgiumlatte} className="items-img"></img>
                    </div>
                    <div>
                        <p className="item-title">Belgium Chocolate Latte</p>
                        <p className="item-desc">Espresso with decadent Belgian chocolate sauce, mocha sauce </p>
                        <p className="amounts">₹ 504.25</p>
                        <Link className="adds">ADD ITEMS</Link>
                    </div>
                </div>
                <div className="o-box1">
                    <div className="dish-img">
                        <img src={belgiumchoco} className="items-img"></img>
                    </div>
                    <div>
                        <p className="item-title1">Belgium Chocolate Frappuccino</p>
                        <p className="item-desc1">Blend of decadent Belgian
                            chocolate sauce and coffee
                            </p>
                        <p className="amounts">₹ 504.25</p>
                        <Link className="adds">ADD ITEMS</Link>
                    </div>
                </div>
                <div className="o-box1">
                    <div className="dish-img">
                        <img src={cookie} className="items-img"></img>
                    </div>
                    <div>
                        <p className="item-title">Double Chocolate Chip Cookie</p>
                        <p className="item-desc">A soft & chewy chocolate cookie topped with chocolate chips .chips blended.</p>
                        <p className="amounts">₹ 504.25</p>
                        <Link className="adds">ADD ITEMS</Link>
                    </div>
                </div>
                <div className="o-box1">
                    <div className="dish-img">
                        <img src={capuccino} className="items-img"></img>
                    </div>
                    <div>
                        <p className="item-title">Capuccino</p>
                        <p className="item-desc">Dark, Rich in flavour espresso lies in wait under a smoothed... <br></br>chips blended.</p>
                        <p className="amounts">₹ 504.25</p>
                        <Link className="adds">ADD ITEMS</Link>
                    </div>
                </div>
                <div className="o-box1">
                    <div className="dish-img">
                        <img src={coldcoffee} className="items-img"></img>
                    </div>
                    <div>
                        <p className="item-title">Cold Coffee</p>
                        <p className="item-desc">Our signature rich in flavour espresso blended with delicate. <br></br>chips blended.</p>
                        <p className="amounts">₹ 504.25</p>
                        <Link className="adds">ADD ITEMS</Link>
                    </div>
                </div>
                <div className="o-box1">
                    <div className="dish-img">
                        <img src={coldamericano} className="items-img"></img>
                    </div>
                    <div>
                        <p className="item-title">Caffe Americano</p>
                        <p className="item-desc">Rich in flavour, full-bodied espresso with hot water  <br></br>chips blended.</p>
                        <p className="amounts">₹ 504.25</p>
                        <Link className="adds">ADD ITEMS</Link>
                    </div>
                </div>



            </div>
            <Gallery></Gallery>
        </div>
    )
}

export default OrderPage