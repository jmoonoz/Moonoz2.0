import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import logo from '../img/moonozTag.svg';

export default function navbar() {
    return (
        <header class="navBar" >
            <Navbar fixed='top'>
                <Container>
                    <Navbar.Brand>
                        <img
                            src={logo}
                            width="150"
                            height="auto"
                            className="d-inline-block align-top"
                            alt="Moonoz Logo Tag"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Container>
                            <Nav className="justify-content-end" activeKey="/home">
                                <Nav.Item>
                                    <Nav.Link >Home</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link>About Me</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link >Contact Me</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>

                                </Nav.Item>
                            </Nav>
                        </Container>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </header>
    )
}
