import React from 'react';
import { Container } from 'react-materialize';

export const ServiceSlice = () => (
    <header className="service-slice">
        <Container>
            <div className="row">
                <div className="col s12 m12 l12">
                    <div className="service-slice--intro">
                        <h1 className="section-title">Services</h1>
                        <h3 className="section-subhead">Plan your project from the comfort of home</h3>
                        <p>
                        Benjamin Plumbing customers know that they can trust and rely on our family 
                        and staff for all of their plumbing needs, including remodeling, new construction, and plumbing 
                        repair services.
                        </p>
                    </div>
                </div>
            </div>
            <div className="row services">
                <div className="col s12 m6 l3">
                    <div className="services-title">
                        <i className="medium material-icons">ac_unit</i>
                        <p>Radiant Heat & Snow Melt</p>
                    </div>
                    <p>
                        Why not consider the many benefits of Radiant Heat and Snowmelt Systems?
                        Give yourself year-round comfort in your work shop, hobby room or auto shop!
                    </p>
                </div>
                <div className="col s12 m6 l3">
                    <div className="services-title">
                        <i className="medium material-icons">build</i>
                        <p>Repair Services</p>
                    </div>
                    <p>
                        Bringing over 100 years of collective experience to support your needs, our Service Technicians are more than just capable.
                        Our customers believe they are truly talented plumbers!
                    </p>
                </div>
                <div className="col s12 m6 l3">
                    <div className="services-title">
                        <i className="medium material-icons">business</i>
                        <p>Commercial Plumbing</p>
                    </div>
                    <p>
                        From "Plan and Spec" to "Design-Build" projects and everything in between, our Project Managers
                        and Estimators can assist you with your commercial plumbing needs.
                    </p>
                </div>
                <div className="col s12 m6 l3">
                    <div className="services-title">
                        <i className="medium material-icons">home</i>
                        <p>Residential Remodeling & New Home Construction</p>
                    </div>
                    <p>
                        From fixture selection to final installation, we eliminate many hassles by providing everything you need to complete your project.
                    </p>
                </div>
            </div>
        </Container>
    </header>
);

export default ServiceSlice;