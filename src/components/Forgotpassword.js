import React from 'react'

function ForgotPassword() {
    return (
        <div className="container ">
            <div className="row input-container">
                <div className="card col-md-4 p-4 signup-card">
                    <div className="card-body">
                        <form>
                            <small className="form-text text-muted mb-2">Forgot your account’s password or having trouble logging into your Team? Enter your email address and we’ll send you a recovery link.</small>
                            <div className="form-group mb-4">
                                <label htmlFor="email">Email</label>
                                <input name="email" type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                            </div>

                            <div className="submit-btn">
                                <input type="submit" value="Send recovery email" className="btn btn-primary" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword;
