import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
// import './FaceLife.css'

const FaceLife = (props) => {
    return (
        
        <div className='shadow-lg'>
            <Row className=''>

                <Image src='https://picsum.photos/id/50/900/400' fluid rounded className='' />

            </Row>
            <Row className=''>
                <Col sm={5}>
                    <h1 className=''>Face Life</h1>
                    <h5 className='font-weight-light'>Display picture attributes</h5>
                    <p className='mt-4'>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                </Col>
                <Col sm={7}>
                    <Image src='https://picsum.photos/id/50/900/400' fluid rounded className='' />
                </Col>
            </Row>

            <Row className=''>
                <Col sm={5}>
                    <h3 className='font-weight-light'>Features</h3>
                    <p className='mt-4'>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                </Col>
                <Col sm={7}>
                    <Image src='https://picsum.photos/id/51/900/400' fluid rounded className='' />
                </Col>
                
            </Row>
        </div>
        
    );
}

export default FaceLife;