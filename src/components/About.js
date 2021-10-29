import { Container, Col, Row } from 'react-bootstrap';

function About() {
    return (
        <Container id='About' fluid>
            <Container>
                <Row >
                    <Col className='sec-text'  sm={3}>
                        <h2>
                            About
                        </h2>
                        <p>sjf laksjdf;lk </p>

                    </Col>
                    <Col className='right-col'sm={8}>
                    <p>
                        djfsfush
                    </p>

                    </Col>
                </Row>

            </Container>
        </Container>

    )
}

export default About;