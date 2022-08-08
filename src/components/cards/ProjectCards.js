import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './ProjectCards.css';

const ProjectCards = ({cardImage,cardTitle,cardText,cardLink,cardExtraInfo}) => {
    return (

        <Card 
        style={{ width: '18rem' }}
        bg={'dark'}
        text={'light'}
        >
            <Card.Img variant="top" src={cardImage} />
                <Card.Body>
                    <Card.Title >{cardTitle}</Card.Title>
                    <Card.Footer>
                        <small className="text-muted">{cardExtraInfo}</small>
                    </Card.Footer>
                    <Card.Text >{cardText}</Card.Text>
                    <Button variant="primary">{cardLink}</Button>
                    
                </Card.Body>
        </Card>

    );
}

export default ProjectCards;