import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import './homePage.css'

const HomePage = (props) => {
    return (
        
        <div>
            <Row className=''>
                <Col sm={5}>
                    <h1 className=''>About Me</h1>
                    <h5 className='font-weight-light'>Hello! Page coming soon!</h5>
                    <p className='mt-4'>Turtles are cool.</p>
                </Col>
                <Col sm={7}>
                    <Image src='https://picsum.photos/900/400' fluid rounded className='' />
                </Col>
            </Row>
        </div>
        
    );
}

export default HomePage;