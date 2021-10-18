import React from 'react';
import { Accordion } from 'react-bootstrap';

const About = () => {
    return (
        <div className="container p-4">

            <div className="row">
                <div className="col-sm-12 col-lg-6">
                    <img src="https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/23/2018/09/Layer-1200.png" width="100%" alt="" />
                </div>
                <div className="col-sm-12 col-lg-6">
                    <h1>About Doctor</h1>
                    <p className="font-white">PROFESSIONAL CARE</p>

                    <Accordion defaultActiveKey="0">

                        <Accordion.Item eventKey="0">
                            <Accordion.Header>The doctor as human being</Accordion.Header>
                            <Accordion.Body>
                                I have experienced seven hundred and seventy moulds.
                                I died from minerality and became vegetable;
                                And from vegetativeness I died and became animal.
                                I died from animality and became man.
                                Then why fear disappearance through death?
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="1">
                            <Accordion.Header>What's a good doctor!!</Accordion.Header>
                            <Accordion.Body>
                                A doctor embarking on his career, an active researcher approaching his peak, and a retired clinician needing geriatric care. We sometimes ask other people too. Despite the disparate vantage points, the wish lists are amazingly similar. We all want doctors who will
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="3">
                            <Accordion.Header>Be a Human First and a Doctor</Accordion.Header>
                            <Accordion.Body>
                                “It’s all about clinical competency. It's all about learning subject matter. It's all about diagnosis and treatment and taking the right test and making sure you have a particular level of clinical competency, but we don't necessarily emphasize the clinician patient interaction,” Dr. Sam says. “And that's so important because it impacts the patient as far as their future health outcomes. But it also impacts the practitioner. And I think that's the piece that we've missed.”
                            </Accordion.Body>
                        </Accordion.Item>

                    </Accordion>


                </div>
            </div>
        </div>
    );
};


export default About;