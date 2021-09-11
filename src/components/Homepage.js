import React from 'react'
import HomeQuestionCard from './HomeQuestionCard'
import './Homepage.css';
function Homepage() {
    return (
        <div className="container-lg">
            <div className="row">
                <div classname="col-3 sidebar">
                    Sidebar
                </div>
                <div className="col-sm-9 questions-container">
                    <div className="row question-bar">
                        <h1 className="home-title col-6.5">
                            Top Questions
                        </h1>
                        <div className="home-btn text-right col-5.5">
                            <button className="btn btn-primary">Ask question</button>
                        </div>
                    </div>
                    <hr />
                    <HomeQuestionCard />
                </div>

            </div>
        </div>
    )
}

export default Homepage
