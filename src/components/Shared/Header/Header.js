import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import './Header.css';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const { users, logOut } = useAuth();
    const { displayName, photoURL } = users;
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container className="header-nav">
                    <NavLink to="/" className="me-4">
                        <img
                            src="http://designarc.biz/demos/hilltown/theme/img/logo.png"
                            width="200"
                            height="30"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </NavLink>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink className="me-2 text-decoration-none" to="/home">HOME</NavLink>
                            <NavLink className="me-2 text-decoration-none" to="/room">ROOMS</NavLink>
                            <NavLink className="me-2 text-decoration-none" to="/services">SERVICES</NavLink>
                            <NavLink className="me-2 text-decoration-none" to="/about">ABOUT US</NavLink>
                            <NavLink className="me-2 text-decoration-none" to="/contact">CONTACT US</NavLink>
                        </Nav>
                        <Nav>
                            {
                                users.email ? <div className="chip me-2">
                                    <img src={photoURL} alt="User" />
                                    {displayName}
                                </div>
                                    : <div></div>
                            }
                            {
                                users.email ? <Link to="/login">
                                    <Button onClick={logOut} className="btn btn-danger">Logout</Button>
                                </Link> : <Link to="/login">
                                    <Button className="btn btn-warning">Login</Button>
                                </Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;