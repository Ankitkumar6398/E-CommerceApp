
import React from "react";
import { FaHeart, FaShoppingCart, FaUser, FaGlobe, FaBell, FaComments } from "react-icons/fa";
import "../css/NavBar.css";

export default function Navbar() {
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
                        <li>Electronics</li>
                        <li>Home</li>
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
                    <FaUser title="Account" />
                    <FaComments title="Live Chat" />
                    <button className="dark-toggle">🌙</button>
                </div>
            </nav>
        </div>
    );
}
