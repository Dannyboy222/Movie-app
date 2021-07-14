import React, {useState} from 'react'
import { Link } from 'react-router-dom';


export default function Navbar() {
    return(
        <div className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                        hello
                </Link>
            </div>
             
        </div>
    ); 
}