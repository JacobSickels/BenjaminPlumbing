import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-materialize';

export const About = () => (
    <header className="about">
        <Container>
            <div className="row">
                <div className="col s12 m12 l12">
                    <h1>About</h1>
                </div>
            </div>  
        </Container>
    </header>
);

export default About;