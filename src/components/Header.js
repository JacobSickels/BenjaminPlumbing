import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavItem, Container, Dropdown } from 'react-materialize';

export const Header = () => (
    <header className="header">
        <Container>
            <nav>
                <div className="nav-wrapper">
                    <ul className="right hide-on-med-and-up">
                        <li>
                            <a href="tel:608 271 7071" className="waves-effect waves-light call-btn">
                                (608) 271-7071 <i className="material-icons left">local_phone</i>
                            </a>
                        </li>
                    </ul>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="/">Home</a></li>
                        <li><a className="dropdown-button" href="/services" data-activates="dropdown-services">Services<i className="material-icons right">arrow_drop_down</i></a>
                            <ul id="dropdown-services" className="dropdown-content">
                                <li><a href="/services#residential">Residential Remodeling and New Home Construction</a></li>
                                <li><a href="/services#commercial">Commercial Plumbing</a></li>
                                <li><a href="/services#repair">Repair Services</a></li>
                                <li><a href="/services#snow">Radiant Heat/ Snow Melt</a></li>
                            </ul>
                        </li>
                        <li><a className="dropdown-button" href="/about" data-activates="dropdown-about">About<i className="material-icons right">arrow_drop_down</i></a>
                            <ul id="dropdown-about" className="dropdown-content">
                                <li><a href="/about#awards">Awards</a></li>
                                <li><a href="/about#team">Our Team</a></li>
                                <li><a href="/careers">Careers</a></li>
                            </ul>
                        </li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                    <ul id="slide-out" className="side-nav">
                        <li><a className="waves-effect" href="/">Home</a></li>
                        <li><a className="waves-effect" href="/about">About</a></li>
                        <li><a className="sub-item" href="/careers">Careers</a></li>
                        <li><a className="sub-item" href="/about#team">Our Team</a></li>
                        <li><a className="sub-item" href="/about#awards">Awards</a></li>
                        <li><a className="waves-effect" href="/services">Services</a></li>
                        <li><a className="sub-item" href="/services#residential">Residential Remodeling</a></li>
                        <li><a className="sub-item" href="#!">Commercial Plumbing</a></li>
                        <li><a className="sub-item" href="#!">Repair Services</a></li>
                        <li><a className="sub-item" href="#!">Radiant Heat/ Snow Melt</a></li>
                        <li><a className="waves-effect" href="#!">Contact Us</a></li>
                </ul>
                <a href="#" data-activates="slide-out" className="button-collapse ham-btn"><i className="material-icons">menu</i></a>
                </div>
            </nav>
        </Container>
    </header>
);

export default Header;