import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import QuestionCard from './QuestionCard';
import './Questions.css';
import Sidebar from './Sidebar';
import axios from './Connection'

function Questions({ login }) {

    const [questions, setQuestionsdata] = useState([]);

    useEffect(() => {
        const getquestions = async () => {
            try {
                let data = await axios.get("/questions/getquestion");
                setQuestionsdata(data.data)
            } catch (error) {
                console.log(error)
            }

        }
        getquestions();
    }, [])

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-2 sidebar">
                    <div className="row">
                        <Sidebar login={login} hlink="questions" />
                    </div>
                </div>
                <div className="col-10 questions-container">
                    <div className="row question-bar">
                        <h1 className="col-6.5">
                            All Questions
                        </h1>
                        <div className="col-5.5 text-right">
                            <Link to="/postquestions"><button className="btn btn-primary">Ask question</button></Link>
                        </div>
                    </div>
                    <hr className="row" />
                    {
                        questions.map((ques, index) => {
                            return <QuestionCard key={index} questions={ques} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Questions
