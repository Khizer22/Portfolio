import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
// import Button from 'react-bootstrap/Button';
import './about_me.css';
import k_img from './me.jpg';
// import l_img from './l-logo_edit.png';
// import g_img from './g-logo_edit.png';

const MainPage = (props) => {

    const delayStyle = (delayTime) =>{
        return(`0.5s ease-out ${delayTime}s 1 normal forwards running fadeIn`);
    }

    return (
        <div>
            {/* <Row >
                <Image src={k_img} fluid id='delay-splash' />
            </Row> */}
            
            
            <div className="container">
                <div className="row align-items-center">

                    <Col  xl={12} align='center' id='title-text'>
                        <h3 className='font-weight-light'>Greetings!</h3>
                        <h1 className='font-weight-light'>I am Khizer Mahboob.</h1>
                    </Col>  
                        
                    <Col xl={6} align="center">
                        <Image src={k_img} fluid id='delay-splash' />
                    </Col>
                    <Col xl={6}>
                        <h1 className='blurb mt-4 delay-text' style={{animation: delayStyle(1.0)}}>I have a passion to create things...</h1>
                        <h1 className='blurb mt-4 delay-text' style={{animation: delayStyle(2.0)}}>So I make <span className='blurb-inside'>software</span> and <span className='blurb-inside'>games</span>.<br/></h1>
                        <h1 className='blurb mt-4 delay-text' style={{animation: delayStyle(4.0)}}>Take a look at my projects.</h1>
                        <h1 className='blurb mt-4 delay-text' style={{animation: delayStyle(6.0)}}>🙂</h1>
                    </Col>
                    
                </div>
            </div>
        </div>
    );
}

export default MainPage;