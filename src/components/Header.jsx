import React from 'react'
import { Link } from 'react-router-dom'

function Header({ title, button }) {

    return (
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">{title}</h1>
            {(button) ?
                <Link
                    to={button.link}
                    className={`my-2 d-sm-inline-block shadow-sm btn ${(button.style) ? button.style : 'btn-sm btn-primary'}`}>
                    <i className="fas fa-upload fa-sm text-white-50"></i> {button.text}
                </Link> :
                <></>
            }
        </div>
    )
}

export default Header