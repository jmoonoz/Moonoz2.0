
import { Container, Col, Row } from 'react-bootstrap';

function Banner() {
    return (
        <Container id='header'className="banner-block parallax-window" data-parallax="scroll" data-image-src="/src/img/01.jpg" fluid>
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
                            <br />
                            <br />
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Container>

    )
}

export default Banner;
