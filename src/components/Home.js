import Banner from './Banner';
import About from './About';
import Design from './Design';
import Shop from './Shop';
import { Container, Col, ProgressBar, Row, ListGroup, ListGroupItem } from 'react-bootstrap';

function Home() {
    return (
        <>

            <Container id='header' className="banner-block" data-parallax="scroll" fluid>
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
                            <Row className='sm-margin'>

                                <h3>
                                    Hello, My name is Joel Muñoz!
                                </h3>

                                <p>
                                    I'm Software Engineer. My expertise is in Front End Development to create stunning user friendly experience. Welcome to my work, have a look around and enjoy!
                                </p>
                            </Row>
                        </Col>
                    </Row>

                </Container>
            </Container>
            <Container id='Experience' fluid>
                <Container>
                    <Row className='sm-margin'>
                        <Col className='sec-text sm-sec-text' sm={3}>
                            <h2>
                                Experience
                            </h2>
                            <p>Here to code you a pixel perfect web</p>

                        </Col>
                        <Col className='right-col' sm={8}>
                            <Row className='sec-text-align exp-bg' >
                                <Col className='exp-info' sm={4}>
                                    
                                    <h5>
                                        Languages I Code:
                                    </h5>
                                    <p>HTML, CSS, JavaScript, C++, Python</p>
                                </Col>
                                <Col className='exp-info middle-sec' sm={4}>
                                    <h5>Building tools:</h5>
                                    <p> React, Bootstrap, Chrome Dev. Tool, Git, Visual Studios, Xcode, Terminal</p>
                                </Col>
                                <Col className='exp-info' sm={4}>
                                <h5>Designer Tools:</h5>
                                <p>Affinity Designer, Blender, Illustrator, Photoshop, Procreate </p>
                                    
                                </Col>
                            </Row>
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