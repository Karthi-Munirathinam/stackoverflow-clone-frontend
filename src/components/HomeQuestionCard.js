import React from 'react';

function HomeQuestionCard() {
    return (
        <>
            <div className="row">

                <div className="col-4 text-muted votes-home-container">
                    <div className="votes-home text-center">
                        <div className="votes-count-home">
                            0
                        </div>
                        <div className="votes-text-home">
                            votes
                        </div>
                    </div>
                    <div className="answers-home text-center">
                        <div className="votes-count-home">
                            0
                        </div>
                        <div className="votes-text-home">
                            answers
                        </div>
                    </div>
                    <div className="views-home text-center">
                        <div className="votes-count-home">
                            0
                        </div>
                        <div className="votes-text-home">
                            views
                        </div>
                    </div>
                </div>

                <div className="col-8">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="question_link">Filter Array to get sum of value for each name same date. Please refer the result Table</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <a href="..." class="badge badge-item">Primary</a>
                        </div>
                        <div className="col-8">
                            <div className="row text-center">
                                <small className="col-12 text-muted">asked 57 secs ago <span className="avatar-name">
                                    Name
                                </span></small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
        </>
    )
}

export default HomeQuestionCard
