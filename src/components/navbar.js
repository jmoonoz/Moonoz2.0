import React, { useState } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import logoBlk from '../img/moonozTag.svg';
import logoWht from '../img/MoonozTagwht.svg'



function NavBar() {
    console.log(window.scrollY);

    const [navbar, setNavBar] = useState(false);
    const [logo, setLogo] = useState(true);

    const navScroll = () => {

        if (window.scrollY >= 80) {
            setNavBar(true);

        } else {
            setNavBar(false);
        }
    };



    window.addEventListener('scroll', navScroll);


    return (
        <header  >
            <Navbar id='navBar-Scroll' className={navbar ? 'navbar-bk' : 'navbar-trans'} fixed="top" expand="lg">
                <Container>
                    <Navbar.Brand>
                        <img
                            src={setLogo ? logoBlk : logoWht }
                            width="100"
                            height="auto"
                            className="d-inline-block align-top"
                            alt="Moonoz Logo Tag"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse >
                        <Container>
                            <Nav className="justify-content-end" activeKey="/home">
                                <Nav.Item>
                                    <Nav.Link >HOME</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link>ABOUT ME</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link >CONTACT</Nav.Link>
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

export default NavBar;
