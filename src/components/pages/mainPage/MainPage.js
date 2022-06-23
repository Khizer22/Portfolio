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
            
                {/* <h5 id='myRole' className='font-weight-light'>Software Developer</h5>    */}

                
            
                <h1 className='font-weight-light'>Greetings!</h1>
                <h3 className='font-weight-light'>I am Khizer Mahboob</h3>
                {/* <h5 id='myRole' className='font-weight-light'>Software Developer</h5> */}
                <p className='mt-4 delay-text'>Take a look at my projects.</p>
                {/* <Button variant='outline-primary'>HELLO</Button> */}
            
                <Image src='https://media-exp1.licdn.com/dms/image/C5603AQFaB6Bi-ahMuQ/profile-displayphoto-shrink_200_200/0/1526326293383?e=1661385600&v=beta&t=IyILXw9qE55D0T0mZg728EmibFzsGwWH7W7tWCHRgSU' fluid rounded id='delay-splash' />

                        

                
                {/* <Row> */}
                    {/* <Image src='https://media-exp1.licdn.com/dms/image/C5603AQFaB6Bi-ahMuQ/profile-displayphoto-shrink_200_200/0/1526326293383?e=1661385600&v=beta&t=IyILXw9qE55D0T0mZg728EmibFzsGwWH7W7tWCHRgSU' fluid rounded id='delay-splash' /> */}

                    {/* <Col xl={4} >
                        <Image src='https://media-exp1.licdn.com/dms/image/C5603AQFaB6Bi-ahMuQ/profile-displayphoto-shrink_200_200/0/1526326293383?e=1661385600&v=beta&t=IyILXw9qE55D0T0mZg728EmibFzsGwWH7W7tWCHRgSU' fluid rounded id='delay-splash' />
                    </Col>
                    <Col xl={8}>
                        <p>Hablo Espaneol</p>
                    </Col> */}
                {/* </Row> */}
                
                
                <p className='mt-4 delay-text'>KHIZER MAHBOOB WITH EXPERIANCE AM COOL GUY HIRE ME PLZ</p>
                 
            </div>
        </div>
    );
}   

export default MainPage;