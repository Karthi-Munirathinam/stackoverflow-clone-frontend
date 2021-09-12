import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from "react-router-dom";
import axios from './Connection';

function Login({ setlogin }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
    const handlesubmit = async (e) => {
        try {
            e.preventDefault();
            let data = await axios.post('/users/login', { email, password });
            console.log(data);
            window.localStorage.setItem("app-token", data.data.token);
            setlogin(true);
            history.push('/');
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="container ">
            <div className="row input-container">
                <div className="card col-md-6 p-4 signup-card">
                    <div className="card-body">
                        <form onSubmit={(e) => handlesubmit(e)}>
                            <div className="form-group mb-2">
                                <label htmlFor="email">Email</label>
                                <input name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="email" aria-describedby="emailHelp" />
                            </div>
                            <div className="form-group mb-4">
                                <div className="password-container"><label htmlFor="password">Password</label><small><Link to="/forgotpassword">Forgot password?</Link></small></div>
                                <input name="password" value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" id="password" />
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
