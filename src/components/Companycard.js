import React from 'react';
import { Link } from 'react-router-dom';

function Companycard({ data }) {
    return (
        <>
            <div className="row">
                <div className="company-card-container">
                    <div className="img-container-company">
                        <img src={data.imgUrl} alt="company logo" width="64" height="64" />
                    </div>
                    <div className="company-details-container">
                        <div className="company-title">
                            {data.companyName}
                        </div>
                        <small className="text-muted company-location">{data.location}</small>
                        <p className="company-desc">{data.description}</p>
                        <div>{
                            data.tags.map((tag, index) => {
                                return <Link key={index} to="/" className="badge badge-item">{tag}</Link>
                            })}
                            <a href="..." className="badge badge-item-job badge-primary">{data.jobs} jobs</a>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="row" />
        </>
    )
}

export default Companycard
