import React from 'react'
import Image from '../../assets/img/undraw_profile_2.svg'
import { Link } from 'react-router-dom'


function HomeCard({ journal }) {

    const { id, title, user, uploadDate } = journal

    return (
        <div className="card my-2">
            <div className="card-body">
                <div className="row">
                    <img alt='' src={Image} className="img-circle col-2 d-inline-block" />
                    <div className="col-8">
                        <h4 className="d-inline-block">{title}</h4>
                        <p> {`${user.firstName} has uploaded a new journal.`}</p>
                        <p> {new Date(uploadDate).toLocaleString()} </p>
                        <div>
                            <Link to={`/journals/view/${id}`} className="d-block d-md-inline-block btn btn-success">
                                See journal
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HomeCard