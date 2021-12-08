import { Container, Col, Row } from 'react-bootstrap';




function Footer() {

  return (
    <Container id="footer" className="footer-sec" fluid>
      <Container>
        <Row>
          <Col className='sec-text sm-sec-text' sm={3}>
            <h2>
              Contact
            </h2>
            <p>
              How to reach me
            </p>

          </Col>
          <Col className='right-col' sm={8}>
            <Row className='footer-text'>
              <Col xs={6} sm={3}>
                <h6>
                  Location
                </h6>
                <p>Hayward, California</p>
              </Col>
              <Col  xs={6} sm={3}>
                <h6>
                  Instagram
                </h6>
                <a href="https://www.instagram.com/moonozdisenoz/?hl=en"><p>@MoonozDisenoz</p></a>
              </Col>
              <Col xs={6} sm={3}>
                <h6>
                  Linkedin
                </h6>
                <a href="https://www.linkedin.com/in/moonoz/"><p>/Moonoz</p></a>
              </Col>
              <Col  xs={6} sm={3}>
                <h6>
                  Github
                </h6>
                <a href="https://www.instagram.com/moonozdisenoz/?hl=en"><p>/jmunoz</p></a>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Footer;