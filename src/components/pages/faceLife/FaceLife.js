import React from 'react';
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import BasePageInidividual from '../BasePageIndividual';
import './FaceLife1.css';
import img1 from "./1.png";
import img2 from './2.png';

class FaceLife extends BasePageInidividual  {

    
    render(){
    
        return (
            
            <div >
                
                {this.addSplashPage(img1)}

                <Row className="justify-content-md-center">

                    {this.addBodyCol(6,'Face Life','Display picture attributes','orem Ipsum is simply dummy text of the printing and typesetting industry.')}
                    {this.addImageCol(6,img2)}

                </Row>

                <Row className="justify-content-md-center">
                    
                    {this.addBodyCol(6,'Features','Display picture attributes','orem Ipsum is simply dummy text of the printing and typesetting industry.')}                    
                    {this.addImageCol(6,'https://picsum.photos/id/50/700/400')}

                </Row>
            </div>
            
        );
    }
}

export default FaceLife;