import React from 'react';
import './Register.css';
import { Link } from "react-router-dom";

function Register() {
    return (
        <div className="container ">
            <div className="row input-container">
                <div className="card col-md-6 p-4 signup-card">
                    <div className="card-body">
                        <form>
                            <div className="form-group mb-2">
                                <label htmlFor="name">Display name</label>
                                <input name="name" type="email" className="form-control" id="name" aria-describedby="emailHelp" />
                            </div>
                            <div className="form-group mb-2">
                                <label htmlFor="email">Email</label>
                                <input name="email" type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                            </div>
                            <div className="form-group mb-4">
                                <label htmlFor="password">Password</label>
                                <input name="password" type="password" className="form-control" id="password" />
                                <small className="form-text text-muted">Passwords must contain at least eight characters, including at least 1 letter and 1 number.</small>
                            </div>
                            <div className="submit-btn">
                                <input type="submit" value="Sign up" className="btn btn-primary" />
                            </div>
                        </form>
                        <div className="pt-4 already-login">
                            <p>Already have an account? <Link to="/login">Log in</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
