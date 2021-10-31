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
                            src="https://i.ibb.co/v3NmKHr/logo-1.png"
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
                            <NavLink className="me-2 text-decoration-none" to="/allServices">SERVICES</NavLink>
                            <NavLink className="me-2 text-decoration-none" to="/aboutus">ABOUT US</NavLink>
                            <NavLink className="me-2 text-decoration-none" to="/contact">CONTACT US</NavLink>
                            {
                                users.email ? <NavLink className="me-2 text-decoration-none" to="/addnew">DASHBOARD</NavLink>
                                    :
                                    <div></div>
                            }
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
                                users.email ? <Link to="/">
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