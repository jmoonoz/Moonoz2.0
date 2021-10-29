import { Button, Container, Col, Form, Row } from 'react-bootstrap';

function Footer() {
    return (
        <Container id="footer" className="footer-sec" fluid>
            <Container>
                <Row>
                    <Container>
                        <Col sm={6}>
                            <Row>
                                <h3>Talk to the Moon</h3>
                                <p>
                                    Feel free to reach out to me if you're intrested in creative collaboration,
                                    commission work, or you'd just like to share you Delinquent Dreamer
                                    story!
                                </p>
                            </Row>
                            <Row>
                                <Form >
                                    <Form.Group controlId="enterName">
                                        <Form.Label>Name<span> *</span></Form.Label>
                                        <Form.Control type="text" placeholder="Name" name="name" />
                                    </Form.Group>
                                    <Form.Group controlId="formGroupEmail">
                                        <Form.Label>Email<span> *</span></Form.Label>
                                        <Form.Control type="email" placeholder="Email" name="email" />
                                    </Form.Group>
                                    <Form.Group controlId="enterSubject">
                                        <Form.Label>Subject<span> *</span></Form.Label>
                                        <Form.Control type="text" placeholder="Email Subject" name="subject" />
                                    </Form.Group>
                                    <Form.Group controlId="exampleForm ControlTextarea1">
                                        <Form.Label>Message<span> *</span></Form.Label>
                                        <Form.Control
                                            as="textarea"
                                            rows={3}
                                            placeholder="Write to Moon, add as much detail as you'd like"
                                            name="message"
                                        />
                                    </Form.Group>
                                    <Button type="submit" variant="light" className="styleButton" value="Send" size="lg">
                                        Submit
                                    </Button>
                                </Form>

                            </Row>

                        </Col>
                    </Container>
                </Row>

            </Container>
        </Container>
    )
}

export default Footer;