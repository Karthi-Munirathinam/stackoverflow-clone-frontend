import React, { useEffect, useState } from 'react'
import './company.css'
import Companycard from './Companycard'
import Sidebar from './Sidebar';
import axios from './Connection';

function Company({ login }) {
    const [companydata, setcompanydata] = useState([]);
    useEffect(() => {
        let getcompanydata = async () => {
            let data = await axios.get('/company/getcompany');
            setcompanydata(data.data);
        }
        getcompanydata();
    }, [])
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-2">
                    <div className="row">
                        <Sidebar login={login} hlink="company" />
                    </div>
                </div>
                <div className="col-10 company-container">
                    {/* <div className="row p-2 ">
                        <input type="search" className="form-control col-8 mr-2" placeholder="search..." />
                        <button className="btn btn-primary">Search</button>
                    </div> */}
                    <hr className="row" />
                    {
                        companydata.map((comp, index) => {
                            return <Companycard key={index} data={comp} />
                        })
                    }

                </div>
            </div>
        </div>
    )
}

export default Company
