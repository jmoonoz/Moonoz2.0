import { Container, Col, Row } from 'react-bootstrap';

function About() {
    return (
        <Container id='About' className='banner-block about-block' fluid>
            <Container>
                <Row >
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

                    </Col>
                    
                </Row>

            </Container>
        </Container>

    )
}

export default About;