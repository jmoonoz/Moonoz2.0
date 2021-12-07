
import { Col, Row } from 'react-bootstrap';
import Masonry from 'masonry-layout';
import ImageOne from '../img/01.1.jpg';
import ImageTwo from '../img/designs/CalaveraDeLaLuna.jpg';
import ImageThree from '../img/designs/CourageDisney.jpg';
import ImageFour from '../img/designs/mirrorMirror.jpg';
const grid = document.querySelector('.grid');

const masonry = new Masonry(grid, {
    itemSelector: 'grid-item',
    columnWidth: 'grid-sizer',
    stagger: 30,
    resize: true,
    gutter: 2
    // columnWidth: 'grid-sizer'
});

// masonry.on('layoutComplete', function (items) {
//     console.log(items.length);
// });

// masonry.layout();


function MasonryGrid() {
    return (
        <Row data-masonry='{"percentPosition": true }'>
            <div class="grid">
                <Col ClassName="grid-sizer " xs={6} sm={6} md={4}></Col>
                {/* <div class="static-banner">Static banner</div> */}
                {/* <div class="grid-sizer col-xs-6 col-sm-6 col-md-1"></div> */}
                <Col className='grid-item' sm={6} md={8}><img src={ImageOne} alt=''></img></Col>
                <Col className='grid-item ' sm={6} md={4}><img src={ImageTwo} alt=''></img></Col>
                <Col className='grid-item grid-item--height2 ' sm={6} md={4}><img src={ImageThree} alt=''></img></Col>
                <Col className='grid-item grid-item--height2 ' sm={6} md={4}><img src={ImageFour} alt=''></img></Col>
                <Col className='grid-item grid-item--height2 ' sm={6} md={4}><img src={ImageOne} alt=''></img></Col>
                {/* <div class="grid-item"><img src={ImageOne}></img></div>
                <div class="grid-item grid-item--width2 grid-item--height2"><img src={ImageOne}></img></div>
                <div class="grid-item grid-item--height3">item 3</div> */}
            </div>
        </Row>
    )


}

export default MasonryGrid;