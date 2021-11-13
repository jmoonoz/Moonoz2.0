import { Container, Col, Image, Row } from 'react-bootstrap';


function Design() {
    return (
        <Container id='Design' fluid>
            <Container>
                <Row >
                    <Col className='sec-text sm-sec-text' sm='3'>
                        <h2>
                            Design
                        </h2>
                        <p>sjf laksjdf;lk </p>

                    </Col>
                    <Col className='right-col' sm='8'>
                        <Row className='inline-block'>
                            <Col sm='8'>
                                <div class='design'>
                                    <div class='design-overlay'>
                                        <img class="full-width img-responsive" src="img/397x300/03.jpg" alt="Portfolio Image" />
                                    </div>
                                </div>

                            </Col>
                            <Col sm='3'>
                                <Image className='img-responsive' src={} />

                            </Col>
                        </Row>
                        <Row>

                        </Row>

                    </Col>
                </Row>

            </Container>
        </Container>

    )
}

export default Design;