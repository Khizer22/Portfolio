import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
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

    fancyTitle() {
        return (
            <div className='text-center a-title'>
                <h1 style={{margin: 0}}>{this.title}</h1>
                <p style={{margin: 0}}>Eternal Gladiator</p>
            </div>
        );
    }
    
    render(){
        const {title,subTitle,linkURL} = this;
        const body = 'This was a school project that I started with my friend around 2017. We created a third person fighting game with a unique feature: directional attacks and parrying.'
    
        return (
            
            <div className=''>

                {this.addSplashPage(img1)}

                <br/>
                {/* <hr/> */}
                
                {/* {this.fancyTitle()} */}
                <h1 className='text-center a-small-title' style={{margin: 0}}>Overview</h1>
            
                <Row className="justify-content-md-center">
                
                    <Col xl={7} className='fade-in'>
              
                        <h5 className='semi-heading'>What is this?</h5>
                        <a href={linkURL[1]} target="_blank" className='small-text'>{linkURL[0]}</a>
                        <p className='small-text' >C++, Unreal Engine 4, Steam Integration, Online Multiplayer</p>
                        
                        <hr/>
                        <p className='mt-4'>This was a school project that I started with my friend around 2017. We created a third person fighting game with a unique feature: directional attacks and parrying.</p>   
                        <p className=''>It is a multiplayer PVP fighting game wich complete Steam integration which allows players to create and find game sessions. There are 3 game modes included: Team Deathmatch, Elimination, and King of The Hill.</p>
                        <p>This was the state of the game in 2018 and we stopped development on it. As of recently I started working on it alone as a hobby and its turning it a much bigger project. I added many new features, 2 big ones specifically: Re-written netcode (More Details below) and "AI" Bots. This is allowing me to pursue adding single player and co-op game modes.</p>
                        
                        
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
                    <h1 className='text-center a-small-title'>Features</h1>
                </Row>

                <Row className="justify-content-md-center">
                                        
                    {/* Lobby */}
                    <Col xl={7} className='fade-in'>                 
                        <h5 className='semi-heading'>Create/Find Game Sessions with Lobbies</h5>
                        <p className='small-text' >Description here</p>
                        <hr/>

                        <p className='mt-4'>Online game</p>                   
                    </Col>
                    <Col xl={5} className='fade-in'>
                        <Image src={img2} fluid rounded  />
                    </Col>

                    {/* Combo System */}
                    <Col xl={7} className='fade-in'>                       
                        <h5 className='semi-heading'>Combo System</h5>
                        <p className='small-text' >Description here</p>
                        <hr/>

                        <p className='mt-4'>Online game</p>                       
                    </Col>
                    <Col xl={5} className='fade-in'>
                        
                        <Image src={img2} fluid rounded  />
                    </Col>

                    {/* AI Bots */}
                    <Col xl={7} className='fade-in'>                        
                        <h5 className='semi-heading'>AI Bots</h5>
                        <p className='small-text' >Description here</p>
                        <hr/>

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

export default Ascendance;