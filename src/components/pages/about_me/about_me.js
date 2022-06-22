import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
// import Button from 'react-bootstrap/Button';
import './about_me.css';
import k_img from './Untitled.jpg';
// import l_img from './l-logo_edit.png';
// import g_img from './g-logo_edit.png';

const MainPage = (props) => {
    return (
        <div>
            {/* <Row >
                <Image src={k_img} fluid id='delay-splash' />
            </Row> */}
            
            
            <Row className="container">
                <div className="row align-items-center">

                    <Col  xl={7}>
                        <h1 className='font-weight-light'>Greetings!</h1>
                        <h1 className='font-weight-light'>I am Khizer Mahboob.</h1>
                    </Col>  
                    <Col  xl={5}>
                        {/* <div className='delay-text header-css'>
                            <a href='https://github.com/khizer22' target="_blank" className='small-text'><img id='l-logo' alt='linkedin logo' src={g_img} width='20px'/>Khizer22</a>
                            <a href='https://ca.linkedin.com/in/khizermahboob' target="_blank" className='small-text'><img id='l-logo' alt='linkedin logo' src={l_img} width='20px'/>Khizer Mahboob</a>
                        </div> */}
                        
                    </Col> 

                    {/* <h5 id='myRole' className='font-weight-light'>Software Developer</h5> */}
                    <p className='mt-4 delay-text'>Take a look at my projects.</p>
                    {/* <Button variant='outline-primary'>HELLO</Button> */}
                
                    <Image src={k_img} fluid rounded id='delay-splash' />

                    {/* <p className='mt-4 delay-text'>KHIZER MAHBOOB WITH EXPERIANCE AM COOL GUY HIRE ME PLZ</p> */}

                    
                </div>
            </Row>
        </div>
    );
}

export default MainPage;