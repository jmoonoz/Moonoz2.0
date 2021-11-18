import { Container, Col, Row } from 'react-bootstrap';
import Masonry from 'masonry-layout';
import imagesLoaded from 'imagesloaded';
import Img1 from '../img/01.1.jpg';
import Img2 from '../img/01.2.jpg';
import '../style/style.scss';

window.onload  = () => {
    const grid = document.querySelector('grid');

    const masonry = new Masonry(grid, {
        itemSelector: ".grid-item",
        columnWidth: ".grid-sizer",
        percentPosition: true
    });

    imagesLoaded(grid).on('progress', function () {
        // layout Masonry after each image loads
        masonry.layout();
    });
};



function Design() {
    return (
        <Container id='Design' fluid>
            <Container>
                <Row >
                    <Col className='sec-text sm-sec-text' sm='3'>
                        <h2>
                            Design
                        </h2>
                        <p>Take a look at the mind of Moonoz and see my thoughts come to life!</p>

                    </Col>
                    <Col className='grid' sm={9}>
                        <div class="grid-sizer col-xs-6 col-sm-6 col-md-1"></div>
                        <div class="grid-item col-xs-12 col-sm-6 col-md-8">
                            <img class="full-width" src={Img1}></img>
                        </div>
                        <div class="grid-item col-xs-12 col-sm-6 col-md-4">
                            <img class='full-width' src={Img2}></img>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>

    )
}



export default Design;