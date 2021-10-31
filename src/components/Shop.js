import { Container, Col, Row } from 'react-bootstrap';

function Shop() {
    return (
        <Container id='Shop' fluid>
            <Container>
                <Row >
                    <Col className='sec-text sm-sec-text' sm={3}>
                        <h2>
                            Shop
                        </h2>
                        <p>sjf laksjdf;lk </p>

                    </Col>
                    <Col className='right-col' sm={8}>
                        <p>
                            djfsfush
                        </p>

                    </Col>
                </Row>
            </Container>
        </Container>

    )
}

export default Shop;