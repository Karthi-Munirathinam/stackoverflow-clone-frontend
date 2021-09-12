import React from 'react';
import './searchtag.css';
import Sidebar from './Sidebar';
import TagCard from './TagCard';

function SearchTag({ login }) {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-2">
                    <div className="row">
                        <Sidebar login={login} hlink="tags" />
                    </div>
                </div>
                <div className="col-10 tags-container">
                    <h3 className="mb-3">Tags</h3>
                    <p className="tag-desc">A tag is a keyword or label that categorizes your question with other, similar questions. Using the right tags makes it easier for others to find and answer your question.</p>
                    {/* <div class="row">
                        <input type="search" placeholder="Filter by tag name..." className="form-control col-6 ml-3 mr-2" />
                        <button className="btn btn-primary">Search</button>
                    </div> */}
                    <hr className="row" />
                    <div class="row card-container">
                        <TagCard />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchTag
