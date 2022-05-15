import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import './Main_Page.css';

const MainPage = (props) => {
    return (
        
        <div className="container">
            <div className="row align-items-center">
                <Row >
                
                        <h1 className='font-weight-light'>Greetings!</h1>
                        <h1 className='font-weight-light'>I am Khizer Mahboob.</h1>
                        <p className='mt-4'id='delay-text'> Take a look at my projects.</p>
                        {/* <Button variant='outline-primary'>HELLO</Button> */}
                    
                        <Image src='https://picsum.photos/900/400' fluid rounded id='delay-splash' />

                </Row>
            </div>
        </div>
    );
}

export default MainPage;