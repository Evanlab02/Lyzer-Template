import React from "react";
import logo from '../logo.svg';
import '../styles/landing.scss'
import { Link } from "react-router-dom";

export default function Landing() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    This is a template for Lyzer-FE. Do not use this for production.
                </p>
                <Link
                    className="App-link"
                    to="/Overview"
                >
                    Open Project
                </Link>
            </header>
        </div>);
}