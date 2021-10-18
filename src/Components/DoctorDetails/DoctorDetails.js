import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const DoctorDetails = () => {
    const { doctorId } = useParams();
    const [doctors, setDoctors] = useState([])
    useEffect(() => {
        fetch('/service.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
    const item = doctors.filter(doctor => doctor.id == doctorId)
    console.log(item);
    return (
        <div className="d-flex justify-content-center">

            <div className="card m-3 " style={{ maxWidth: "540px" }}>
                <div className="row g-0">
                    <div className="">
                        <img src={item[0]?.img} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="">
                        <div className="card-body">
                            <h5 className="card-title">{item[0]?.name}</h5>
                            <p className="card-text"><b>Specialty</b> : {item[0]?.specialty}</p>
                            <p className="card-text"><b>Qualification</b> : <i> {item[0]?.Qualification}</i></p>
                            <p className="card-text"> {item[0]?.Description}</p>
                            <Link as={HashLink} to="/home"><button className="btn btn-primary">Back</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>




    );
};

export default DoctorDetails;