import React from "react";
import { Link } from "react-router-dom";
export const Navbar = ({ favouritesCount }) => {
    return (
        <>
            <header className="bg-danger text-white p-3 shadow-sm sticky-top animate-navbar">
                <div className="container d-flex justify-content-between align-items-center">
                    <h1 className="m-0 logo-text">SRC Blood Donation</h1>
                    <ul className="d-flex list-unstyled m-0 gap-4 align-items-center">
                        <li><Link to="/blood-donation/" className="nav-link-custom">Home</Link></li>
                        <li><Link to="/about" className="nav-link-custom">About Us</Link></li>
                        <li><Link to="/donation" className="nav-link-custom">Blood Types</Link></li>
                        <li><Link to="/login" className="nav-link-custom">Login</Link></li>
                        <li>
                            <Link to="/favourite" className="nav-link-custom position-relative">
                                Favourites
                                {favouritesCount > 0 && (
                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning text-dark">
                                        {favouritesCount}
                                    </span>
                                )}
                            </Link>
                        </li>
                        <li><Link to="/prayer-api" className="nav-link-custom">Prayer Timings</Link></li>
                    </ul>
                </div>
            </header>
        </>
    );

}