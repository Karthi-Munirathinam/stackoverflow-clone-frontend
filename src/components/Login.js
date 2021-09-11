import React from 'react';
import { Link } from "react-router-dom";

function Login() {
    return (
        <div className="container ">
            <div className="row input-container">
                <div className="card col-md-4 p-4 signup-card">
                    <div className="card-body">
                        <form>
                            <div className="form-group mb-2">
                                <label for="email">Email</label>
                                <input name="email" type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                            </div>
                            <div className="form-group mb-4">
                                <div className="password-container"><label for="email">Password</label><small><Link to="/forgotpassword">Forgot password?</Link></small></div>
                                <input name="password" type="password" className="form-control" id="password" />
                            </div>
                            <div className="submit-btn">
                                <input type="submit" value="Log in" className="btn btn-primary" />
                            </div>
                        </form>
                        <div className="pt-4 already-login">
                            <p>Don't have an account? <Link to="/register">Sign up</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
