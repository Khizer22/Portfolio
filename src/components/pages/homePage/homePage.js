import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import CardList from '../../cards/CardList';
import './homePage.css';
const HomePage = (props) => {
    return (
        
        <div>
            <div className="container">
                <div className="row align-items-center">

                    <Col  xl={12} align='center' id='title-text'>
                        <h1 className='font-weight-light'>Other Projects</h1>
                    </Col>  
                        
                    {/* <Col xl={6} align="center">
                        <Image src={k_img} fluid id='delay-splash' />
                    </Col> */}
                    <CardList />
                    
                </div>
            </div>


            
        </div>
        
    );
}

export default HomePage;