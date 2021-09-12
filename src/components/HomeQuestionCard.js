import React from 'react';
import { Link } from 'react-router-dom';

function HomeQuestionCard({ questions }) {
    return (
        <>
            <div className="row">

                <div className="col-4 text-muted votes-home-container">
                    <div className="votes-home text-center">
                        <div className="votes-count-home">
                            {questions.votes}
                        </div>
                        <div className="votes-text-home">
                            votes
                        </div>
                    </div>
                    <div className="answers-home text-center">
                        <div className="votes-count-home">
                            {questions.answers.length}
                        </div>
                        <div className="votes-text-home">
                            answers
                        </div>
                    </div>
                    <div className="views-home text-center">
                        <div className="votes-count-home">
                            {questions.views}
                        </div>
                        <div className="votes-text-home">
                            views
                        </div>
                    </div>
                </div>

                <div className="col-8">
                    <div className="row">
                        <div className="col-12">
                            <Link to={`/answerquestion/${questions._id}`}><h3 className="question_link">{questions.questionTitle}</h3></Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            {
                                questions.tags.map(tag => {
                                    return <Link to="/" className="badge badge-item">{tag}</Link>
                                })
                            }
                        </div>
                        {/* <div className="col-8">
                            <div className="row text-center">
                                <small className="col-12 text-muted">asked 57 secs ago <span className="avatar-name">
                                    Name
                                </span></small>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
            <hr />
        </>
    )
}

export default HomeQuestionCard
