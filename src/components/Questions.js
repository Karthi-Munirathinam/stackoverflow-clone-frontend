import React from 'react'
import QuestionCard from './QuestionCard';
import './Questions.css';
import Sidebar from './Sidebar';

function Questions() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-2 sidebar">
                    <div className="row">
                        <Sidebar hlink="questions" />
                    </div>
                </div>
                <div className="col-10 questions-container">
                    <div className="row question-bar">
                        <h1 className="col-6.5">
                            All Questions
                        </h1>
                        <div className="col-5.5 text-right">
                            <button className="btn btn-primary">Ask question</button>
                        </div>
                    </div>
                    <hr className="row" />
                    <QuestionCard />
                </div>
            </div>
        </div>
    )
}

export default Questions
