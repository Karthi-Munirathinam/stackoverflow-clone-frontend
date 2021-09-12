import React from 'react'

function QuestionCard({ questions }) {
    return (
        <>
            <div className="row">
                <div className="col-2 text-muted votes-container">
                    <div className="votes text-center">
                        <div className="votes-count">
                            {questions.votes}
                        </div>
                        <div className="votes-text">
                            votes
                        </div>
                    </div>
                    <div className="answers text-center">
                        <div className="votes-count">
                            {questions.answers.length}
                        </div>
                        <div className="votes-text">
                            answers
                        </div>
                    </div>
                    <div className="views text-center">
                        <div className="votes-text">
                            {questions.views} view
                        </div>
                    </div>
                </div>
                <div className="col-10">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="question_link">{questions.questionTitle}</h3>
                            <div className="question_desc">
                                {questions.description}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">{
                            questions.tags.map(tag => {
                                return <a href="..." class="badge badge-item">{tag}</a>
                            })
                        }
                        </div>
                        {/* <div className="col-8">
                            <div className="row text-center">
                                <small className="col-12 text-muted">asked 57 secs ago</small>
                            </div>
                            <div className="row avatar-container text-center">
                                <img src="" alt="avatar" width="32" height="32" className="col-3" />
                                <span className="col-9 avatar-name">
                                    Name
                                </span>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
            <hr />
        </>
    )
}

export default QuestionCard
