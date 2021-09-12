import React from 'react';
import Sidebar from './Sidebar';
import { useHistory } from 'react-router-dom';
import { useFormik } from 'formik';
import axios from './Connection';

function PostQuestions({ login }) {
    const history = useHistory();
    const formik = useFormik({
        initialValues: {
            questionTitle: '',
            description: '',
            tags: '',
        },
        validate: (values) => {
            let errors = {};
            if (!values.questionTitle) {
                errors.displayName = "Required";
            }
            if (values.questionTitle && values.questionTitle.length < 3) {
                errors.questionTitle = "Must contain atleast 3 letters";
            }
            if (!values.description) {
                errors.description = "Required";
            }
            if (values.description && values.description.length < 15) {
                errors.description = "Description must contain atleast 15 characters";
            }
            if (values.description.length > 500) {
                errors.description = "Description must not exceed 500 characters";
            }
            if (!values.tags) {
                errors.password = "Required";
            }
            return errors;
        },
        onSubmit: (values) => {
            let handleformSubmit = async () => {
                try {
                    let tag = values.tags.split(',');
                    let data = await axios.post("/questions/postquestion", {
                        questionTitle: values.questionTitle,
                        description: values.description,
                        tags: tag
                    })
                    console.log(data.data);
                    history.push('/questions')
                } catch (error) {
                    console.log(error);
                }
            }
            handleformSubmit();
        },
    })
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
                        <h1 className="col-12">
                            Ask a public question
                        </h1>
                    </div>
                    <div className="card col-md-6 p-3 signup-card">
                        <div className="card-body">
                            <form onSubmit={formik.handleSubmit}>
                                <div className="col-12">
                                    <label htmlFor="questionTitle">Title</label>{formik.errors.questionTitle ? <span className="required">{formik.errors.questionTitle}</span> : null}
                                    <input type="text" name="questionTitle" value={formik.values.questionTitle} onChange={formik.handleChange} className="form-control" />
                                </div>
                                <div className="col-12">
                                    <label htmlFor="description">Description</label>{formik.errors.description ? <span className="required">{formik.errors.description}</span> : null}
                                    <textarea type="text" name="description" value={formik.values.description} onChange={formik.handleChange} className="form-control"></textarea>
                                </div>
                                <div className="col-12">
                                    <label htmlFor="tags">Tags</label>{formik.errors.tags ? <span className="required">{formik.errors.tags}</span> : null}
                                    <input type="text" name="tags" value={formik.values.tags} onChange={formik.handleChange} className="form-control" />
                                    <small>Separate tags using comma(,)</small>
                                </div>
                                <div className="col-12 text-center"><input type="submit" value="Submit" className="btn btn-primary" /></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostQuestions
