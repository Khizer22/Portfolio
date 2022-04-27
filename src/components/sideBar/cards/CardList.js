import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProjectCards from './ProjectCards';



const CardList = (props) => {
    return (
        <Row className='py-5'>
           <Col>
                <ProjectCards cardImage='https://picsum.photos/id/20/320/200'/>
           </Col>
           <Col>
                <ProjectCards cardImage='https://picsum.photos/id/30/320/200'/>
           </Col>
           <Col>
                <ProjectCards cardImage='https://picsum.photos/id/40/320/200'/>
           </Col>
        </Row>
    );
}

export default CardList;