import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
    return (
        <div className="containers">
            <Row className="header-all">
                <Col xs={12} lg={6}>
                    <div className="home-description">
                        <h1 className="title">
                            What's a good doctor and how do you make one? Doctors should be
                            good companions for people
                        </h1>
                        <p className="p-title">
                            A good doctor is not one who cures the most because in many specialties recovery is not a frequent outcome. It is not one who makes the best diagnosis because in many cases of self limited or incurable disorders the precise and timely diagnosis does not make a great difference for the patient.
                        </p>
                        <Button className="btn-regular p-3">Visit Our Hospital</Button>
                    </div>
                </Col>

                <Col xs={12} lg={6}>
                    <div className="home-image">
                        {/*   <img
                            src="https://st3.depositphotos.com/9401596/14801/v/600/depositphotos_148016559-stock-illustration-medical-characters-doctors-and-nurses.jpg"
                            style={{ width: "100%" }}
                            alt=""
                        /> */}
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Banner;
