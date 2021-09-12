import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import './Userprofile.css';



function EditProfile() {
    return (
        <div className="container-fluid user-container">
            <div className="row">
                <div className="col-2 sidebar">
                    <div className="row">
                        <Sidebar hlink="user" />
                    </div>
                </div>
                <div className="col-md-10 user-profile-container">
                    <div className="user-pic-details row">
                        <div className="user-pic col-2.5">
                            <img src="http://placehold.it/125x125" alt="userpic" height="125" width="125" style={{ borderRadius: "0.3rem" }} />
                        </div>
                        <div className="user-details col-9">
                            <div className="user-name">
                                Karthi munirathinam
                            </div>
                            <div className="user-location text-muted">
                                Vellore,Tamil Nadu,India
                            </div>
                        </div>
                    </div>
                    <div className="row m-5 update-form">
                        <form className="col-8">
                            <div className="form-group  mb-2">
                                <label htmlFor="displayName">Display name</label>
                                <input name="displayName" type="email" className="form-control" id="name" aria-describedby="emailHelp" required />
                            </div>
                            <div className="form-group  mb-2">
                                <label htmlFor="location">Location</label>
                                <input name="location" type="location" className="form-control" id="location" aria-describedby="locationHelp" />
                            </div>
                            <div className="form-group  mb-4">
                                <label htmlFor="title">Title</label>
                                <input name="title" type="title" className="form-control" id="title" />
                            </div>
                            <div className="form-group  mb-4">
                                <label htmlFor="aboutme">About me</label>
                                <textarea name="about" className="form-control" id="aboutme" placeholder=""></textarea>
                            </div>
                            <div className="update-btn">
                                <input type="submit" value="Save profile" className="btn btn-outline-primary" />
                                <Link to="/userprofile"><button className="btn btn-outline-danger cancel-btn">Cancel</button></Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditProfile
