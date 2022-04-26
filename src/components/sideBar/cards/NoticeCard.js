import React from 'react';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';

const NoticeCard = (props) => {
    return (
        <Row>
           <Card className='text-center bg-secondary text-white my-5 py-4'>
                <Card.Body>This is some text within a card body.This is some text within a card bodyThis is some text within a card body</Card.Body>
            </Card>
        </Row>
    );
}

export default NoticeCard;