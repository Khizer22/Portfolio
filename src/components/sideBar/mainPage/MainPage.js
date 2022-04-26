import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

const MainPage = (props) => {
    return (
        
        <Row className='px-4 my-5'>
            <Col sm={7}>
                <Image src='https://picsum.photos/900/400' fluid rounded className='' />
            </Col>
            <Col sm={5}>
                <h1 className='font-weight-light'>TAGLINE</h1>
                <p className='mt-4'>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                <Button variant='outline-primary'>HELLO</Button>
            </Col>
        </Row>
        
    );
}

export default MainPage;