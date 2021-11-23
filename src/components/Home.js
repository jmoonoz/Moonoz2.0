import Banner from './Banner';
import About from './About';
import Design from './Design';
import Shop from './Shop';
import { Container, Col, Row } from 'react-bootstrap';

function Home() {
    return (
        <>

            <Container id='header' className="banner-block" data-parallax="scroll"  fluid>
                <Container>
                    <Row>
                        <Col sm={6}>
                            <div class="banner-divider">
                                <h1 class="banner-title">
                                    Joel
                                    <br />
                                    Muñoz
                                    <i class="fab fa-linkedin-in"></i>
                                </h1>
                                <p class="banner-text">Front-end Developer &amp; Graphic Designer</p>
                            </div>
                            <ul class="list-inline">
                                <li><a href="https://www.linkedin.com/in/moonoz/" class="social-icons"><i class="bi bi-linkedin"></i></a></li>
                                <li><a href="https://www.instagram.com/moonozdisenoz/?hl=en" class="social-icons"><i class="bi bi-instagram"></i></a></li>
                                <li><a href="https://github.com/jmoonoz?tab=repositories" class="social-icons"><i class="bi bi-github" /></a></li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Container id='About' fluid>
                <Container>
                    <Row >
                        <Col className='sec-text sm-sec-text' sm={3}>
                            <h2>
                                About
                            </h2>
                            <p></p>

                        </Col>
                        <Col className='right-col' sm={8}>
                            <h3>
                                Hello, My name is Joel Muñoz!
                            </h3>

                            <p>
                                I'm Software Engineer. My expertise is in Front End Development to create stunning user friendly experience. Welcome to my work, have a look around and enjoy!
                            </p>

                        </Col>
                    </Row>

                </Container>
            </Container>
            <Container id='Design' fluid>
                <Container>
                    <Row >
                        <Col className='sec-text sm-sec-text' sm={3}>
                            <h2>
                                Design
                            </h2>
                            <p>Take a look at the mind of Moonoz and see my thoughts come to life!</p>

                        </Col>
                        <Col className='grid' sm={8}>
                            <div class='row' >

                            </div>

                        </Col>
                    </Row>
                </Container>
            </Container>
        </>

    )
}

export default Home;