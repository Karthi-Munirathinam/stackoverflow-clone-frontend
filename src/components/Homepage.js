import React from 'react'
import HomeQuestionCard from './HomeQuestionCard'
import './Homepage.css';
import Sidebar from './Sidebar';
function Homepage() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-2">
                    <div className="row">
                        <Sidebar hlink="home" />
                    </div>
                </div>
                <div className="col-10 questions-container">
                    <div className="question-bar row">
                        <h1 className="home-title col-6.5">
                            Top Questions
                        </h1>
                        <div className="home-btn text-right col-5.5">
                            <button className="btn btn-primary">Ask question</button>
                        </div>
                    </div>
                    <hr className="row" />
                    <HomeQuestionCard />
                </div>
            </div>
        </div>
    )
}

export default Homepage
