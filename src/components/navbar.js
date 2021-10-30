import React, { useState } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import logoBlk from '../img/moonozTag.svg';
import logoWht from '../img/MoonozTagwht.svg'



function NavBar() {
    const [navbar, setNavBar] = useState(false);
    const [logo, setLogo] = useState(true);

    console.log(window.scrollY);


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
                    <Navbar.Brand href='#header'>
                    
                        <img
                            src={navbar ? logoBlk : logoWht}
                            width="100"
                            height="auto"
                            className="d-inline-block align-top"
                            alt="Moonoz Logo Tag"
                        />
                    
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse >
                            <Nav className="justify-content-end" activeKey="/home">
                                <Nav.Item>
                                    <Nav.Link href='#header' >HOME</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href='#About'>ABOUT</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href='#Design'>DESIGN</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href='#Shop'>SHOP</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href="#footer">CONTACT</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>

                                </Nav.Item>
                            </Nav>
                        
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </header>
    )
}

export default NavBar;
