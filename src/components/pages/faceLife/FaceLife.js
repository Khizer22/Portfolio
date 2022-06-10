import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import BasePageInidividual from '../BasePageIndividual';
import './FaceLife1.css';
import img1 from "./header2.png";
import img2 from './2.png';
import img3 from './screenshot_fc.png';
import img4 from './screenshot2_fc.png';

class FaceLife extends BasePageInidividual  {

    
    constructor(props){
        super(props);

        this.title = 'Face Life';
        this.subTitle = 'Face Detection App';
        this.linkURL = ['https://facelife.herokuapp.com','https://facelife.herokuapp.com/'];
        
    }

    fancyTitle() {
        return (
            <div className='text-center f-title'>
                <h1 style={{margin: 0}}>{this.title}</h1>
                <p style={{margin: 0}}>Eternal Gladiator</p>
            </div>
        );
    }
    
    render(){
        const {title,subTitle,linkURL} = this;
        const body = 'This was a school project that I started with my friend around 2017. We created a third person fighting game with a unique feature: directional attacks and parrying.'
    
        const move = <i>move</i>;
        const linkedMoves = <i>linked moves</i>

        return (
            
            <div className=''>

                {this.addSplashPage(img1)}

                {/* <hr/> */}
                
                {/* {this.fancyTitle()} */}
                <Row>
                    <h1 className='text-center f-small-title' style={{margin: 0}}>Overview</h1>
                </Row>
            
                <Row className="justify-content-md-center">
                
                    <Col xl={7} className='fade-in'>
              
                        <h5 className='semi-heading'>What is this?</h5>
                        <a href={linkURL[1]} target="_blank" className='small-text'>{linkURL[0]}</a>
                        <p className='small-text' >React, Express.js, knex.js, PostgreSQL</p>
                        
                        <hr className='hr' />

                        <p className='mt-4'>FaceLife is a web application that detects faces on images using machine learning. I started this project to have experience building an application that is complete from end to end. This meant building a front end component for user interaction, a back-end component that executes the logic for the website and makes the appropriate API requests, and a database which stores user information for authentication.</p>   
                        <p>Face Detection is done by making requests to Clarifai and displaying the results on the image. In the future I plan to expand on this concept to add more Clariai features on the input images.</p>
                        {/* <Image src={img2} style={{maxWdith:300}} fluid rounded  /> */}
                        

                        <p className=''></p>    
                        
                    </Col>

                    <Col xl={5} md='center'>
                        <Image src={img2} fluid rounded  />
                        {/* <Image src={img4} fluid rounded  /> */}
                    </Col>

                </Row>

                {/* FEATURES */}
                <Row>
                    <h1 className='text-center f-small-title'>Features</h1>
                </Row>

                {/* Combo System */}
                <Row className="justify-content-md-center">
                    
                    <Col xl={7} className='fade-in'>                       
                        <h5 className='semi-heading'>Front End</h5>
                        <p className='small-text'>React, CSS Grid, Flexbox</p>
                        <hr className='hr' />

                        <p>I created a responsive website that supports any screen size. To achieve this, I used a css grid with a combination of flexbox to organize items into components. I used node modules to use particle and parallax tilt effects.</p>
                    </Col>

                    <Col xl={5} className='fade-in'>
                        
                        <Image src={img3} fluid rounded  />
                    </Col>
 
                </Row>

                {/* Lobby */}
                <Row className="justify-content-md-center">                                 
                    <Col xl={7} className='fade-in'>                 
                        <h5 className='semi-heading'>Back End</h5>
                        <p className='small-text' >Node,Express.js,Knex</p>
                        <hr className='hr' />

                        <p className='mt-4'>The backend server hosts API endpoints which the front end uses to traverse pages. This also handles face detection by making requests to Clarifai API. A connection to the database is done here using knex. The server authenticates users from the input received from the front end and querying them against the database.</p>                   
                    
                    </Col>
                    <Col xl={5} className='fade-in'>
                        <Image src={img2} fluid rounded  />
                    </Col>
                </Row> 

                {/* AI Bots */}
                <Row className="justify-content-md-center">
                    <Col xl={7} className='fade-in'>                        
                        <h5 className='semi-heading'>Database</h5>
                        <p className='small-text' >PostgreSQL</p>
                        <hr className='hr' />

                        <p className='mt-4'>Database for this application is hosted in heroku. PostgreSQL is used to store user information intelligently, ensuring unique email and user ids. The back-end has logic to authenticate users against the input received from the front-end.</p>                       
                    
                    </Col>
                    <Col xl={5} className='fade-in'>                      
                        <Image src={img3} fluid rounded  />
                    </Col>
                </Row>

                {/* CHALLENGES */}
                <Row>
                    <h1 className='text-center f-small-title'>Challenges</h1>
                </Row>

                <Row className="justify-content-md-center">
                    {/* Network */}
                    <Col xl={7} className='fade-in'>                       
                        <h5 className='semi-heading'>Design Challenges</h5>
                        <p className='small-text' >Description here</p>
                        <hr className='hr' />

                        <p className='mt-4'>Online game</p>                       
                    </Col>
                    <Col xl={5} className='fade-in'>
                        
                        <Image src={img4} fluid rounded  />
                    </Col>
                </Row>

                <Row className="justify-content-md-center">
                    {/* Game Design */}
                    <Col xl={7} className='fade-in'>                       
                        <h5 className='semi-heading'>Node Modules</h5>
                        <p className='small-text' >Description here</p>
                        <hr className='hr' />

                        <p className='mt-4'>Online game</p>                       
                    </Col>
                    <Col xl={5} className='fade-in'>
                        
                        <Image src={img2} fluid rounded  />
                    </Col>
                </Row>
                
            </div>
            
        );
    }
}

export default FaceLife;