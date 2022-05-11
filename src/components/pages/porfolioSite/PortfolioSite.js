import React from 'react';
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Image from 'react-bootstrap/Image';
import BasePageInidividual from '../BasePageIndividual';
// import './ReplacementHeads.css'
import img1 from "./a_1.png";
import img2 from "./a_1.png";

class PortfolioSite extends BasePageInidividual  {

    
    
    render(){
    
        return (
            
            <div className=''>
                
                {this.addSplashPage(img1)}

                <Row className="justify-content-md-center">

                    {this.addBodyCol(6,'Replacement Heads','Display picture attributes','orem Ipsum is simply dummy text of the printing and typesetting industry.')}
                    {this.addImageCol(6,img2)}

                </Row>

                <Row className="justify-content-md-center">
                    
                    {this.addBodyCol(6,'Features','Display picture attributes','orem Ipsum is simply dummy text of the printing and typesetting industry.')}                    
                    {this.addImageCol(6,img2)}

                </Row>
            </div>
            
        );
    }
}

export default PortfolioSite;