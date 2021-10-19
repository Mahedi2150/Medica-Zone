import React from 'react';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const { id, name, img, specialty, visit, Qualification } = props.service
    return (
        <div className="container">
            <div className="col">
                <div className="card h-100 mb-5">
                    <img src={img} className="card-img-top" alt="..."></img>
                    <div className="card-body shadow p-3  bg-body rounded">
                        <h5 className="card-title">Name : {name}</h5>
                        <p className="card-text"><i><b>Speciality</b> : {specialty}</i></p>
                        <p className="card-text"><i><b>Qualification</b> : {Qualification}</i></p>
                        <p className="card-text"><i><b>Visiting fee</b> : {visit}</i></p>
                        <Link to={`/details/${id}`}><button className="btn-regular">Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;