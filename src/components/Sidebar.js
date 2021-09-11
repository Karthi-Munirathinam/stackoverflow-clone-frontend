import React from 'react';
import './sidebar.css';
import { Link } from 'react-router-dom';
function Sidebar({ hlink }) {
    return (
        <>
            <ol className="wrapper">
                <Link className={`${hlink === "home" ? "active-link" : ""}`} to="/"><li className={`sidebar-home btn  ${hlink === "home" ? "active-link-li" : ""}`}>Home</li></Link>
                <small className="text-muted text-uppercase sidebar-head">Public</small>
                <Link className={`${hlink === "questions" ? "active-link" : ""}`} to="/questions"><li className={`sidebar-link btn ${hlink === "questions" ? "active-link-li" : ""}`}>Questions</li></Link>
                <Link className={`${hlink === "tags" ? "active-link" : ""}`} to="/tags"><li className={`sidebar-link btn ${hlink === "tags" ? "active-link-li" : ""}`}>Tags</li></Link>
                <Link className={`${hlink === "user" ? "active-link" : ""}`} to="/users"><li className={`sidebar-link btn ${hlink === "user" ? "active-link-li" : ""}`}>Users</li></Link>
                <small className="text-muted text-uppercase sidebar-head">Find a job</small>
                <Link className={`${hlink === "company" ? "active-link" : ""}`} to="/company"> <li className={`sidebar-link btn ${hlink === "company" ? "active-link-li" : ""}`}>Companies</li></Link >

            </ol >
        </>
    )
}

export default Sidebar
