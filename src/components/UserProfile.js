import axios from './Connection';
import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import './Userprofile.css';
function UserProfile({ login }) {
    const [user, setuser] = useState([]);
    useEffect(() => {
        const getuser = async () => {
            try {
                let users = await axios.get(`users/getusers/${window.localStorage.getItem("user-id")}`);
                setuser(users.data[0]);
                console.log(users.data)
            } catch (error) {
                console.log(error)
            }
        }
        getuser();
    }, [])

    return (
        <div className="container-fluid user-container">
            <div className="row">
                <div className="col-2">
                    <div className="row">
                        <Sidebar login={login} hlink="user" />
                    </div>
                </div>
                <div className="col-19 user-profile-container">
                    <div className="user-pic-details">
                        <div className="user-pic col-2.5">
                            <img src="http://placehold.it/125x125" alt="userpic" height="125" width="125" style={{ borderRadius: "0.3rem" }} />
                        </div>
                        <div className="user-details col-9">
                            <div className="user-name">
                                {user.displayName}
                            </div>
                            <div className="user-location text-muted">
                                {user.location}
                            </div>
                            {/* <div className="btn-edit-container"><Link to="/editprofile"><button className="btn btn-outline-secondary">Edit profile</button></Link></div> */}
                        </div>
                    </div>
                    <div className="user-stats">
                        <div className="col-12">
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
                                        {user.about ? user.about : "Your about me section is currently blank. Would you like to add one?"}
                                    </div>
                                </div>
                            </div>
                            <div className="row user-answers">
                                <div className="col-sm-6 ">
                                    <div className="row">
                                        <div className="answers-title-num">
                                            <div className="answers-title">Answers
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
                                            <span className="questions-title">Questions </span>
                                            <span className="text-muted">(0)</span>
                                        </div>
                                    </div>
                                    <hr className="row" />
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
