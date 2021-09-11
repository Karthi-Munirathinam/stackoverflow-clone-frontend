import React from 'react'

function Companycard() {
    return (
        <>
            <div className="row">
                <div className="company-card-container">
                    <div className="img-container-company">
                        <img src="http://placehold.it/64x64" alt="company logo" />
                    </div>
                    <div className="company-details-container">
                        <div className="company-title">
                            Company title
                        </div>
                        <small className="text-muted company-location">Location</small>
                        <p className="company-desc">Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum</p>
                        <div>
                            <a href="..." class="badge badge-item">Primary</a>
                            <a href="..." class="badge badge-item">Primary</a>
                            <a href="..." class="badge badge-item">Primary</a>
                            <a href="..." class="badge badge-item-job badge-primary">4 jobs</a>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="row" />
        </>
    )
}

export default Companycard
