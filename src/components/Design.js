import { Container, Col, Row } from 'react-bootstrap';

function Design() {
    return (
        <Container className="design-block" fluid>
            <Container>
                <Row >
                    <Col sm={6}>
                        <div class="banner-divider">
                            <h1 class="banner-title">
                                Mooñoz
                                <br />
                                Diseñoz
                                <i class="fab fa-linkedin-in"></i>
                            </h1>
                            <p class="banner-text">Freelance Graphic Designer</p>
                        </div>

                    </Col>
                </Row>
            </Container>
        </Container>

    )
}



export default Design;