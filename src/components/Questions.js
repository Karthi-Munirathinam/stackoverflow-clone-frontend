import React from 'react'
import QuestionCard from './QuestionCard';
import './Questions.css';

function Questions() {
    return (
        <div className="container-lg">
            <div className="row">
                <div classname="col-3 sidebar">
                    Sidebar
                </div>
                <div className="col-sm-9 questions-container">
                    <div className="row question-bar">
                        <h1 className="col-sm-6 col-md-6">
                            All Questions
                        </h1>
                        <div className="col-sm-6 col-md-4 text-center">
                            <button className="btn btn-primary">Ask question</button>
                        </div>
                    </div>
                    <hr />
                    <QuestionCard />
                </div>
            </div>
        </div>
    )
}

export default Questions
