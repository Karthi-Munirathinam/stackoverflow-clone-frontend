import React from 'react'

function QuestionCard() {
    return (
        <>
            <div className="row">
                <div className="col-2 text-muted votes-container">
                    <div className="votes text-center">
                        <div className="votes-count">
                            0
                        </div>
                        <div className="votes-text">
                            votes
                        </div>
                    </div>
                    <div className="answers text-center">
                        <div className="votes-count">
                            0
                        </div>
                        <div className="votes-text">
                            answers
                        </div>
                    </div>
                    <div className="views text-center">
                        <div className="votes-text">
                            0 view
                        </div>
                    </div>
                </div>
                <div className="col-10">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="question_link">Filter Array to get sum of value for each name same date. Please refer the result Table</h3>
                            <div className="question_desc">
                                This is the dataset I got. I want to filter sum of the value for each name in a same date. Please refer the result table I want. I want to filter like this. This is the Result Image Date
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <a href="..." class="badge badge-item">Primary</a>
                        </div>
                        <div className="col-8">
                            <div className="row text-center">
                                <small className="col-12 text-muted">asked 57 secs ago</small>
                            </div>
                            <div className="row avatar-container text-center">
                                <img src="" alt="avatar" width="32" height="32" className="col-3" />
                                <span className="col-9 avatar-name">
                                    Name
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
        </>
    )
}

export default QuestionCard
