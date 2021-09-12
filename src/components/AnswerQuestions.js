import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import axios from './Connection';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useHistory } from 'react-router-dom';

function AnswerQuestions(props) {
    const [question, setQuestion] = useState([]);
    const [answer, setanswer] = useState();
    const [votes, setvotes] = useState();
    const [views, setviews] = useState();
    const history = useHistory();


    const handlesubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`/questions/postanswer/${props.match.params.id}`, {
                questionTitle: question.questionTitle,
                description: question.description,
                tags: question.tags,
                votes,
                views,
                answers: answer
            })
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        let getquestion = async () => {
            try {
                let questiondata = await axios.get(`questions/getquestion/${props.match.params.id}`);
                setQuestion(questiondata.data);
                setvotes(questiondata.data.votes);
                setviews(questiondata.data.votes + 1);
            } catch (error) {
                console.log(error)
            }
        }
        getquestion();
    }, [])

    const handlevotes = async (op, vote) => {

        try {
            if (op === "inc") {
                setvotes(vote + 1);
            } else {
                setvotes(vote - 1);
            }
            await axios.put(`/questions/postanswer/${props.match.params.id}`, {
                questionTitle: question.questionTitle,
                description: question.description,
                tags: question.tags,
                votes,
                views,
                answers: question.answers
            })
            history.push('/');

        } catch (error) {
            console.log(error)
        }

    }
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-2 sidebar">
                    <div className="row">
                        <Sidebar login={true} hlink="questions" />
                    </div>
                </div>
                <div className="col-10 questions-container">
                    <div className="row question-bar">
                        <h1 className="col-12">
                            {question.questionTitle}
                        </h1>
                    </div>
                    <hr className="row" />
                    <div className="row">
                        <div className="col-2">
                            <div className="likes-container">

                                <ExpandLessIcon className="arrow " onClick={() => handlevotes("inc", votes)} />
                                {votes}
                                <ExpandMoreIcon className="arrow" onClick={() => handlevotes("dec", votes)} />

                            </div>
                        </div>
                        <div className="col-8">
                            <div className="row pb-3">
                                {question.description}
                            </div>
                            <div className="row pb-4">
                                {/* {
                                    question[0].tags.map(tag => {
                                        return <a key={tag} href="..." className="badge badge-item">{tag}</a>
                                    })
                                } */}

                            </div>
                        </div>
                    </div>
                    <hr className="row" />

                    <form className="col-12" onSubmit={(e) => handlesubmit(e)}>
                        <label htmlFor="answer">Your answer</label>
                        <textarea name="answer" value={answer} onChange={(e) => setanswer(e.target.value)} className="form-control pb-4 mb-4"></textarea>
                        <div className="text-center"><input type="submit" className="btn btn-primary text-center" /></div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AnswerQuestions
