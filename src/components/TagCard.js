import React from 'react'
import { Link } from 'react-router-dom'

function TagCard() {
    return (
        <div className="card col-sm-3 tag-card">
            <Link href="..." className="badge badge-item badge-item-tag">javascript</Link>
            <small className="text-muted text-center">1 questions</small>
        </div>
    )
}

export default TagCard
