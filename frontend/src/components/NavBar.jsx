
import React from "react";
import { FaHeart, FaShoppingCart, FaUser, FaGlobe, FaBell, FaComments } from "react-icons/fa";
import "../css/NavBar.css";
import {useNavigate} from "react-router-dom";

export default function Navbar() {
    const [showAccountDropdown, setShowAccountDropdown] = React.useState(false);

    const toggleAccountDropdown = () => {
        setShowAccountDropdown(!showAccountDropdown);
    }
    const navigate = useNavigate();
    return (
        <div className="navbar-wrapper">
            {/* Flash Sale Banner */}
            {/*<div className="promo-banner">*/}
            {/*    🕒 20% off this weekend! Use code: WEEKEND20*/}
            {/*</div>*/}

            {/* Navbar */}
            <nav className="navbar">
                <div className="navbar-left">
                    <div className="logo">ShopLogo</div>
                    <ul className="nav-links">
                        <li>Men</li>
                        <li>Women</li>
                        <li onClick={() => navigate(`/category/electronics`)} >Electronics</li>
                        <li onClick={()=>navigate('/')}>Home </li>
                    </ul>
                </div>

                <div className="navbar-center">
                    <input type="text" placeholder="Search products..." className="search-bar" />
                </div>

                <div className="navbar-right">
                    <FaGlobe title="Language / Currency" />
                    <FaBell title="Notifications" />
                    <FaHeart title="Wishlist" />
                    <FaShoppingCart title="Cart" />
                    <div className="account-wrapper " onClick={toggleAccountDropdown}>
                    <FaUser title="Account" />
                    {
                        showAccountDropdown && (
                            <div className="account-dropdown">
                                <button onClick={()=>navigate('/login')}>Login</button>
                                <button onClick={()=>navigate('/register')}>Register</button>
                            </div>
                        )
                    }
                    </div>
                    <FaComments title="Live Chat" />
                    <button className="dark-toggle">🌙</button>
                </div>
            </nav>
        </div>
    );
}
