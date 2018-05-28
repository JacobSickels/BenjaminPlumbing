import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => (
    <div className="footer">
        <footer className="page-footer">
            <div className="container">
                <div className="row">
                    <div className="col l6 s12">
                        <h5 className="white-text">Benjamin Plumbing</h5>
                        <p className="grey-text text-lighten-4">
                            Benjamin Plumbing, Inc.<br />
                            2870 Commerce Park Drive<br />
                            Fitchburg, WI 53719
                        </p>
                    </div>
                    <div className="col l4 offset-l2 s12">
                        <h5 className="white-text">Links</h5>
                        <ul>
                            <li className="footer-link"><a className="footer-link" href="#!">Home</a></li>
                            <li className="footer-link"><a className="footer-link" href="#!">About</a></li>
                            <li className="footer-link"><a className="footer-link" href="#!">Services</a></li>
                            <li className="footer-link"><a className="footer-link" href="#!">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <div className="container">
                    © 2018 Benjamin Plumbing
                </div>
            </div>
        </footer>
    </div>
);

export default Footer;
