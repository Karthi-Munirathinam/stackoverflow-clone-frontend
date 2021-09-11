import React from 'react'
import './company.css'
import Companycard from './Companycard'
import Sidebar from './Sidebar'
function Company() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-2">
                    <div className="row">
                        <Sidebar hlink="company" />
                    </div>
                </div>
                <div className="col-10 company-container">
                    <div className="row p-2 ">
                        <input type="search" className="form-control col-8 mr-2" placeholder="search..." />
                        <button className="btn btn-primary">Search</button>
                    </div>
                    <hr className="row" />
                    <Companycard />
                </div>
            </div>
        </div>
    )
}

export default Company
