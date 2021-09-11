import React from 'react'
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import './Userprofile.css';
function UserProfile() {
    return (
        <div className="container user-container">
            <div className="row">
                <div classname="col-2 sidebar">
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
                            <div className="btn-edit-container"><Link to="/editprofile"><button className="btn btn-outline-secondary">Edit profile</button></Link></div>
                        </div>
                    </div>
                    <div className="user-stats row">
                        <div class="col-12">
                            <div className="row user-stats-about">
                                <div className="col-6">
                                    <h5 className="stats-user">Stats</h5>
                                    <div className="user-stats-stats">
                                        <div className="votes-user ">
                                            <div className="votes-count-user">
                                                0
                                            </div>
                                            <div className="votes-text-user">
                                                answers
                                            </div>
                                        </div>
                                        <div className="answers-user ">
                                            <div className="votes-count-user">
                                                0
                                            </div>
                                            <div className="votes-text-user">
                                                questions
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <h5 className="about-user">About</h5>
                                    <div className="about-me">
                                        Your about me section is currently blank. Would you like to add one? Edit profile
                                    </div>
                                </div>
                            </div>
                            <div className="row user-answers">
                                <div className="col-sm-6 ">
                                    <div className="row">
                                        <div className="answers-title-num">
                                            <div class="answers-title">Answers
                                                <span className="text-muted"> (0)</span>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="row" />
                                    <div className="row">
                                        <div className="">You have not answered any questions</div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="row">
                                        <div className="col-12 questions-title-num">
                                            <span class="questions-title">Questions </span>
                                            <span className="text-muted">(0)</span>
                                        </div>
                                    </div>
                                    <hr classname="row" />
                                    <div className="row">
                                        <div className="col-12">You have not asked any questions</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default UserProfile
