import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
// import './Ascendance.css'

const Ascendance = (props) => {
    return (
        
        <div className='shadow-lg'>
            <Row className=''>

                <Image src='https://static.wixstatic.com/media/aa5790_94fcd96eaf75467cad899e61b0340e23~mv2.png/v1/fill/w_900,h_255,al_c,usm_0.66_1.00_0.01,enc_auto/aa5790_94fcd96eaf75467cad899e61b0340e23~mv2.png' fluid rounded className='' />
                
            </Row>

            <Row className=''>
                <Col sm={5}>
                    <h1 className=''>Replacement Heads</h1>
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

export default Ascendance;