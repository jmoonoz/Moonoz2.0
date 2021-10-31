import { Container, Col, Image, Row } from 'react-bootstrap';
import Design1 from '../img/MoonozDisenoz.jpg';

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
                                        <Image className='img-responsive' src={Design1} />
                                    </div>
                                </div>

                            </Col>
                            <Col sm='3'>
                                <Image className='img-responsive' src={Design1} />

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