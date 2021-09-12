import React from 'react';
import './Register.css';
import { Link } from "react-router-dom";
import { useFormik } from 'formik';
import axios from './Connection'
import { useHistory } from 'react-router-dom';
function Register() {

    const history = useHistory();
    const formik = useFormik({
        initialValues: {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        },
        validate: (values) => {
            let errors = {};
            let regpass = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,15}$/
            if (!values.displayName) {
                errors.displayName = "Required";
            }
            if (values.displayName && values.displayName.length < 3) {
                errors.displayName = "Must contain atleast 3 letters";
            }
            if (!values.email) {
                errors.email = "Required";
            } else if (values.email && !values.email.includes('@')) {
                errors.email = "Enter valid e-mail";
            }
            if (!values.password) {
                errors.password = "Required";
            } else if (values.password.length < 8) {
                errors.password = "password must contain atleast 8 characters";
            } else if (!regpass.test(values.password)) {
                errors.password = "Passwords must contain at least 1 letter and 1 number";
            }
            if (!values.confirmPassword) {
                errors.confirmPassword = "Required"
            } else if (values.confirmPassword !== values.password) {
                errors.confirmPassword = "Password/Confirm password doesnot match";
            }
            return errors;
        },
        onSubmit: (values) => {
            let handleformSubmit = async () => {
                try {
                    await axios.post("/users/saveuser", { displayName: values.displayName, email: values.email, password: values.password, confirmPassword: values.confirmPassword })
                    history.push('/login')
                } catch (error) {
                    console.log(error);
                }
            }
            handleformSubmit();
        },
    })

    return (
        <div className="container ">
            <div className="row input-container">
                <div className="card col-md-6 p-3 signup-card">
                    <div className="card-body">
                        <form onSubmit={formik.handleSubmit}>
                            <div className="form-group mb-2">
                                <label htmlFor="displayName">Display name</label>{formik.errors.displayName ? <span className="required">{formik.errors.displayName}</span> : null}
                                <input name="displayName" type="text" value={formik.values.displayName} onChange={formik.handleChange} className="form-control" id="displayName" aria-describedby="emailHelp" />
                            </div>
                            <div className="form-group mb-2">
                                <label htmlFor="email">Email</label>{formik.errors.email ? <span className="required">{formik.errors.email}</span> : null}
                                <input name="email" type="email" value={formik.values.email} onChange={formik.handleChange} className="form-control" id="email" aria-describedby="emailHelp" />
                            </div>
                            <div className="form-group mb-2">
                                <label htmlFor="password">Password</label>{formik.errors.password ? <span className="required">{formik.errors.password}</span> : null}
                                <input name="password" type="password" value={formik.values.password} onChange={formik.handleChange} className="form-control" id="password" />
                                <small className="form-text text-muted">Passwords must contain at least eight characters, including at least 1 letter and 1 number.</small>
                            </div>
                            <div className="form-group mb-4">
                                <label htmlFor="confirmPassword">Confirm password</label>{formik.errors.confirmPassword ? <span className="required">{formik.errors.confirmPassword}</span> : null}
                                <input name="confirmPassword" type="password" value={formik.values.confirmPassword} onChange={formik.handleChange} className="form-control" id="confirmPassword" />
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
