import React, { useEffect, useState } from 'react'
import HomeQuestionCard from './HomeQuestionCard'
import './Homepage.css';
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';
import axios from './Connection'

function Homepage({ login }) {
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
                <div className="col-2">
                    <div className="row">
                        <Sidebar login={login} hlink="home" />
                    </div>
                </div>
                <div className="col-10 questions-container">
                    <div className="question-bar row">
                        <h1 className="home-title col-6.5">
                            Top Questions
                        </h1>
                        <div className="home-btn text-right col-5.5">
                            {
                                login
                                    ? <Link to="/postquestions"><button className="btn btn-primary">Ask question</button></Link>
                                    : <Link to="/login"><button className="btn btn-primary">Login to ask question</button></Link>
                            }
                        </div>
                    </div>
                    <hr className="row" />
                    {
                        questions.map((ques, index) => {
                            return <HomeQuestionCard key={index} questions={ques} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Homepage
