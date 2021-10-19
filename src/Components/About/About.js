import React from "react";
import { Accordion } from "react-bootstrap";
import "./About.css";

const About = () => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-lg-6 col-sm-12">
                    <img
                        className="w-100"
                        src="https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/23/2018/09/Layer-1200.png"
                        alt=""
                    />
                </div>
                <div className="col-lg-6 col-sm-12">
                    <h3>About Medica Zone</h3>
                    <p className="text-primary">PROFESSIONAL CARE</p>

                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>The doctor as human being</Accordion.Header>
                            <Accordion.Body>
                                I have experienced seven hundred and seventy moulds. I died from
                                minerality and became vegetable; And from vegetativeness I died
                                and became animal. I died from animality and became man. Then
                                why fear disappearance through death?” Dr. Sam says. “And that's so
                                important because it impacts the patient as far as their future
                                health outcomes. But it also impacts the practitioner. And I
                                think that's the piece that we've missed.”
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="1">
                            <Accordion.Header>What's a good doctor!!</Accordion.Header>
                            <Accordion.Body>
                                A doctor embarking on his career, an active researcher
                                approaching his peak, and a retired clinician needing geriatric
                                care. We sometimes ask other people too. Despite the disparate
                                vantage points, the wish lists are amazingly similar. We all
                                want doctors who will
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="3">
                            <Accordion.Header>Be a Human First and a Doctor</Accordion.Header>
                            <Accordion.Body>
                                “It’s all about clinical competency. It's all about learning
                                subject matter. It's all about diagnosis and treatment and
                                taking the right test and making sure you have a particular
                                level of clinical competency, but we don't necessarily emphasize
                                the clinician patient interaction,
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>

            {/* service section  */}

            <div className="container1 my-5">
                <h2 className="text-center p-4 text-primary">Our Beloved Support</h2>

                <div class="row row-cols-1 row-cols-md-3 g-4">
                    <div class="col">
                        <div class="card  shadow p-2 mb-5 bg-body rounded">
                            <img
                                src="https://website-api.doctorshosp.com/storage/images/menu_items_cover_images/2tHzaSXcO89MfyKnARNnUsyrsYt7nYjqh88L2miT.jpeg"
                                class="card-img-top"
                                alt="..."
                            />
                            <div class="card-body1">
                                <div class="card-body">
                                    <div className="about-details">
                                        <h5>Emergency Immediate Care</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card  shadow p-2 mb-5 bg-body rounded">
                            <img
                                src="https://website-api.doctorshosp.com/storage/images/menu_items_cover_images/SjCSVUHjyr15l3lT8DiabwNZh3ChSmiwINe7hb8V.jpeg"
                                class="card-img-top"
                                alt="..."
                            />
                            <div class="card-body1">
                                <div class="card-body">
                                    <div className="about-details">
                                        <h5>24 Hr Pharmacy</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card  shadow p-2 mb-5 bg-body rounded">
                            <img
                                src="https://website-api.doctorshosp.com/storage/images/menu_items_cover_images/CTuRTFeLMJnWGBFrzrjNQcv8sUJ0OlS2ZJMO78Op.jpeg"
                                class="card-img-top"
                                alt="..."
                            />
                            <div class="card-body1">
                                <div class="card-body">
                                    <div className="about-details">
                                        <h5>Prime Care</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="card  shadow p-2 mb-5 bg-body rounded">
                            <img
                                src="https://website-api.doctorshosp.com/storage/images/menu_items_cover_images/J6AqkMN5modHWERF9HTC8rLF1KcfZEBqUlp1XwZd.jpeg"
                                class="card-img-top"
                                alt="..."
                            />
                            <div class="card-body1">
                                <div class="card-body">
                                    <div className="about-details">
                                        <h5>Imaging</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card  shadow p-2 mb-5 bg-body rounded">
                            <img
                                src="https://website-api.doctorshosp.com/storage/images/menu_items_cover_images/EnjdFTozCkHW6V03HdCctO48qIdx5KaT1oMTnz4n.jpeg"
                                class="card-img-top"
                                alt="..."
                            />
                            <div class="card-body1">
                                <div class="card-body">
                                    <div className="about-details">
                                        <h5>Specialist Clinics</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card  shadow p-2 mb-5 bg-body rounded">
                            <img
                                src="https://website-api.doctorshosp.com/storage/images/menu_items_cover_images/ucU9wlEMQlNLtdGRUlW0xw2jPd5i27Kwma9E6T0Q.jpeg"
                                class="card-img-top"
                                alt="..."
                            />
                            <div class="card-body1">
                                <div class="card-body">
                                    <div className="about-details">
                                        <h5>24 Hr Laboratoy</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default About;
