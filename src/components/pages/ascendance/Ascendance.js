import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Image from 'react-bootstrap/Image';
import BasePageInidividual from '../BasePageIndividual';
import './Ascendance.css'
import img1 from './a.jpg';
import img2 from './a_1.png';
import img3 from './a_2.png';
import img4 from './a_3.png';

class Ascendance extends BasePageInidividual  {

    constructor(props){
        super(props);

        this.title = 'Ascendance';
        this.subTitle = 'Third Person Fighting Game';
        this.linkURL = ['Gameplay Video','https://www.youtube.com/watch?v=IJFmiBTTb_k'];
        
    }
    
    render(){
        const {title,subTitle,linkURL} = this;
        const body = 'Its a game'
    
        return (
            
            <div className=''>

                {this.addSplashPage(img1)}

                <Row className="justify-content-md-center">
                
                    <Col xl={6} className='fade-in'>
                        <div className='text-center a-title'>
                            <h1 style={{margin: 0}}>{title}</h1>
                            <p style={{margin: 0}}>Eternal Gladiator</p>
                        </div>
                        <hr/>
                        <h5 className=' font-weight-light'>{subTitle}</h5>
                        <a href={linkURL[1]} target="_blank" className='' style={{margin: 0}}>{linkURL[0]}</a>
                        <p style={{margin: 0}}>"Release"</p>
                        <p className='mt-4'>{body}</p>      
                    </Col>

                    {this.addImageCol(6,img2)}

                </Row>

                <Row className="justify-content-md-center">
                                        
                    <Col xl={6} className='fade-in'>
                        <h1 className='text-center a-title'>Features</h1>
                        {/* <h5 className='font-weight-light'>Display picture attributes</h5> */}
                        <p className='mt-4'>Online game</p>
                    </Col>
                    
                    {this.addImageCol(6,img4)}

                </Row> 
            </div>
            
        );
    }
}

export default Ascendance;