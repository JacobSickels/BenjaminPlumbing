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
                <li><a href="#">Home</a></li>
				<li><a className="dropdown-button" href="#" data-activates="dropdown-services">Services<i className="material-icons right">arrow_drop_down</i></a>
                    <ul id="dropdown-services" className="dropdown-content">
                        <li><a href="#!">Residential Remodeling and New Home Construction</a></li>
                        <li><a href="#!">Commercial Plumbing</a></li>
                        <li><a href="#!">Repair Services</a></li>
                        <li><a href="#!">Radiant Heat/ Snow Melt</a></li>
                    </ul>
                </li>
                <li><a className="dropdown-button" href="#" data-activates="dropdown-about">About<i className="material-icons right">arrow_drop_down</i></a>
                    <ul id="dropdown-about" className="dropdown-content">
                        <li><a href="#!">Awards</a></li>
                        <li><a href="#!">Our Team</a></li>
                        <li><a href="#">Careers</a></li>
                    </ul>
                </li>
				<li><a href="#">Contact</a></li>
            </ul>
			<ul id="slide-out nav-translate" className="side-nav">
				<li><a className="waves-effect" href="#!">Home</a></li>
				<li><div className="divider"></div></li>
				<li><a className="waves-effect" href="#!">About</a></li>
			    <li><a className="sub-item" href="#!">Our Team</a></li>
			    <li><a className="sub-item" href="#!">Testimonials</a></li>
				<li><a className="sub-item" href="#!">Leave a Review</a></li>
				<li><div className="divider"></div></li>
				<li><a className="waves-effect" href="#!">Services</a></li>
				<li><a className="sub-item" href="#!">Residential Remodeling</a></li>
			    <li><a className="sub-item" href="#!">Commercial Plumbing</a></li>
			    <li><a className="sub-item" href="#!">Repair Services</a></li>
				<li><a className="sub-item" href="#!">Radiant Heat/ Snow Melt</a></li>
				<li><div className="divider"></div></li>
				<li><a className="waves-effect" href="#!">Products</a></li>
				<li><div className="divider"></div></li>
				<li><a className="waves-effect" href="#!">Manufacturers</a></li>
				<li><div className="divider"></div></li>
				<li><a className="waves-effect" href="#!">Employment</a></li>
				<li><div className="divider"></div></li>
				<li><a className="waves-effect" href="#!">Contact Us</a></li>
		  </ul>
		  <a href="#" data-activates="slide-out" className="button-collapse ham-btn"><i className="material-icons">menu</i></a>
		</div>
</nav>


            {/* <Navbar right>
                <NavItem href="/">Home</NavItem>
                <NavItem href="/about">About</NavItem>
                <NavItem href="/about">Services</NavItem>
                <NavItem href="/contact">Contact</NavItem>
            </Navbar> */}
        </Container>
    </header>
);

export default Header;