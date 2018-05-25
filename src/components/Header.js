import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavItem, Container, Dropdown } from 'react-materialize';

export const Header = () => (
    <header className="header">
        <Container>
            <Navbar right>
                <NavItem href="/">Home</NavItem>
                <NavItem href="/about">About</NavItem>
                <NavItem href="/about">Services</NavItem>
                <NavItem href="/contact">Contact</NavItem>
            </Navbar>
        </Container>
    </header>
);

export default Header;


$(".dropdown-trigger").dropdown();
        