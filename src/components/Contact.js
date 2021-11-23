import { Button, Container, Col, Form, Row } from 'react-bootstrap';
import emailjs from 'emailjs-com';

// access key tokems
const API_SER = process.env.REACT_APP_SERVICE_KEY;
const API_TEMP = process.env.REACT_APP_TEMPLATE_KEY;
const API_USER = process.env.REACT_APP_USER_KEY;

function Contact(props) {
    // function to send email, Requires emailJS
    function sendEmail(e) {
        e.preventDefault();

        console.log(process.env.NODE_ENV);

        emailjs.sendForm(
            API_SER,
            API_TEMP,
            e.target,
            API_USER
        )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
        e.target.reset();
    }
    return (
        <Container id="Contact-Me" className="contact-header" fluid>
            <Container>
                <Row>
                    <Container >
                        <Col className='chat-sec' sm={6}>
                            
                                <Row>
                                    <h3>Talk to the Moon</h3>
                                    <p>
                                        Feel free to reach out to me via the form below!
                                    </p>
                                </Row>
                                <Row>
                                    <Form onSubmit={sendEmail}>
                                        <Form.Group controlId="enterName">
                                            <Form.Label>Name<span> *</span></Form.Label>
                                            <Form.Control type="text" placeholder="Full Name" required name="name" />
                                        </Form.Group>
                                        <Form.Group controlId="formGroupEmail">
                                            <Form.Label>Email<span> *</span></Form.Label>
                                            <Form.Control type="email" placeholder="Email" required name="email" />
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
                                        <Button type="submit" variant="outline-light" className="styleButton" value="Send" size="lg">
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

export default Contact;