import React from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaYoutube, FaFacebook } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
                <div className="grid grid-flow-col gap-4">
                    <Link to='/'>Home</Link>
                    <Link to='/blog'>Blog</Link>
                </div>
                <div>
                    <div className="grid grid-flow-col gap-4 text-3xl">
                        <FaTwitter />
                        <FaYoutube />
                        <FaFacebook />
                    </div>
                </div>
                <div>
                    <p>Copyright © 2023 - All right reserved by Dream Food.</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;