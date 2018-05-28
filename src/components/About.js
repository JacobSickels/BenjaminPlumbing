import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-materialize';

export const About = () => (
    <header className="about">
        <Container>
            <div className="row">
                <div className="col s12 m12 l12">
                    <div className="about-banner">
                        <h1 className="about-title"> About us </h1>
                        <p>Be it a small residential plumbing repair or a large commercial plumbing installation, 
                            since 1962 Benjamin Plumbing has been serving the greater Madison, Wisconsin area as 
                            a full service plumbing contractor with distinction. All of our plumbers are fully 
                            licensed and our knowledgeable staff is up-to-date on all the latest plumbing products and technology.
                        </p>
                        <p>
                        Call for an appointment. Our new facility allows us to serve you better by focusing on in-home sales and service.
                        We no longer have a showroom or over-the-counter parts sales, so you can plan your project from the comfort of your own home.
                        </p>
                        <p>
                        Benjamin Plumbing customers know that they can trust 50 Year Anniversary and rely on our family 
                        and staff for all of their plumbing needs, including remodeling, new construction, and plumbing 
                        repair services. For more information or a free estimate, we invite you to call (608) 271-7071 or email Benjamin Plumbing.
                        </p>
                    </div>
                </div>
            </div>  
        </Container>
    </header>
);

export default About;