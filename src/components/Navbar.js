import React, { useEffect, useState } from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import './navbar.css';
import logo from '../logo.svg';
import { Link } from "react-router-dom";

function Navbar({ login, handleLogout }) {

    return (
        <div className="container-fluid navbar-container">
            <div className="row">
                <div className="col-12 nav-container">
                    <div className="icon-container col-3">
                        <div className="menu-icon mr-3">
                            <MenuIcon />
                        </div>
                        <Link to="/"><div className="logo"><img src={logo} alt="logo" /></div></Link>
                    </div>
                    <div className="col-7">
                        <input type="search" placeholder="search..." className="form-control" />
                    </div>

                    {
                        login ? <div className="col-2 btn-container">
                            <Link to="/userprofile"> <input type="button" className="btn btn-outline-info" value="Profile" /></Link>
                            <Link to="/login"><input type="button" onClick={handleLogout} className="btn btn-primary" value="logout" /></Link>
                        </div> : <div className="col-2 btn-container">
                            <Link to="/login"> <input type="button" className="btn btn-outline-info" value="Log in" /></Link>
                            <Link to="/register"><input type="button" className="btn btn-primary" value="Sign up" /></Link>
                        </div>
                    }


                </div>
            </div>
        </div>
    )
}

export default Navbar
