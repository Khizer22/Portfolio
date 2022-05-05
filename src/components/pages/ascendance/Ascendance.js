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
    
        const move = <i>move</i>;
        const linkedMoves = <i>linked moves</i>

        return (
            
            <div className=''>

                {this.addSplashPage(img1)}

                {/* <hr/> */}
                
                {/* {this.fancyTitle()} */}
                <Row>
                    <h1 className='text-center a-small-title' style={{margin: 0}}>Overview</h1>
                </Row>
            
                <Row className="justify-content-md-center">
                
                    <Col xl={7} className='fade-in'>
              
                        <h5 className='semi-heading'>What is this?</h5>
                        <a href={linkURL[1]} target="_blank" className='small-text'>{linkURL[0]}</a>
                        <p className='small-text' >C++, Unreal Engine 4, Steam Integration, Online Multiplayer</p>
                        
                        <hr className='hr' />

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
                    {/* Combo System */}
                    <Col xl={7} className='fade-in'>                       
                        <h5 className='semi-heading'>Fighting Engine</h5>
                        <p className='small-text'>Input Stream, Move List, Abilities</p>
                        <hr className='hr' />

                        <p>We needed to make a fighting game, and the most fundamental requirement of a fighting game is some sort of an input system. We created an input stream which takes player input every frame and stores it, with an expiry time of 0.25 seconds. With this data, the engine checks every frame for any <i>confirmed moves</i>.</p>
                        <p>A {move} is nothing more than data stored together that have information about a specific move such as: Animation to play, damage dealt, etc. Each {move} also has <i>linked moves</i> that link to other <i>moves</i> with a specific input. So the input stream is checking every frame if it hit a <i>linked move</i> with it's required input. This is called checking for <i>confirmed moves</i></p>
                                    
                    </Col>

                    <Col xl={5} className='fade-in'>
                        
                        <Image src={img3} fluid rounded  />
                    </Col>

                    <Col xl={7} className='fade-in'>                       

                        <p>We needed to make a fighting game, and the most fundamental requirement of a fighting game is some sort of an input system. We created an input stream which takes player input every frame and stores it, with an expiry time of 0.25 seconds. With this data, the engine checks every frame for any <i>confirmed moves</i>.</p>
                                    
                    </Col>

                    <Col xl={5} className='fade-in'> 
                        <Image src={img4} fluid rounded  />
                    </Col>  
                </Row>

                <Row className="justify-content-md-center">                                 
                    {/* Lobby */}
                    <Col xl={7} className='fade-in'>                 
                        <h5 className='semi-heading'>Create/Find Game Sessions with Lobbies</h5>
                        <p className='small-text' >Description here</p>
                        <hr className='hr' />

                        <p className='mt-4'>Online game</p>                   
                    </Col>
                    <Col xl={5} className='fade-in'>
                        <Image src={img2} fluid rounded  />
                    </Col>
                </Row> 

                <Row className="justify-content-md-center">
                    {/* AI Bots */}
                    <Col xl={7} className='fade-in'>                        
                        <h5 className='semi-heading'>AI Bots</h5>
                        <p className='small-text' >Description here</p>
                        <hr className='hr' />

                        <p className='mt-4'>Online game</p>                       
                    </Col>
                    <Col xl={5} className='fade-in'>                      
                        <Image src={img3} fluid rounded  />
                    </Col>
                </Row>

                {/* CHALLENGES */}
                <Row>
                    <h1 className='text-center a-small-title'>Challenges</h1>
                </Row>

                <Row className="justify-content-md-center">
                    {/* Network */}
                    <Col xl={7} className='fade-in'>                       
                        <h5 className='semi-heading'>Network</h5>
                        <p className='small-text' >Description here</p>
                        <hr className='hr' />

                        <p className='mt-4'>Online game</p>                       
                    </Col>
                    <Col xl={5} className='fade-in'>
                        
                        <Image src={img4} fluid rounded  />
                    </Col>
                </Row>

                <Row className="justify-content-md-center">
                    {/* SOMEtING ELSE */}
                    <Col xl={7} className='fade-in'>                       
                        <h5 className='semi-heading'>SOMEtING ELSE</h5>
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

export default Ascendance;