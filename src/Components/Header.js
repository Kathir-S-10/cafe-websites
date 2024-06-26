import React from "react";
import '../Styles/Header.css';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <div>
                <p className="header-title">Ray Cafe</p>
            </div>
            <div>
                <ul>

                    <li><Link to='/' className="header-btn">Home</Link></li>
                    <li><Link to='/Order' className="header-btn">Order</Link></li>
                    <li><Link to='/Contact' className="header-btn">Contact</Link></li>
                    
                </ul>
            </div>
        </div>
    )
}

export default Header