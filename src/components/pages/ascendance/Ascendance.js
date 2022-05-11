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

                {/* Combo System */}
                <Row className="justify-content-md-center">
                    
                    <Col xl={7} className='fade-in'>                       
                        <h5 className='semi-heading'>Fighting Engine</h5>
                        <p className='small-text'>Input Stream, Move List, Abilities</p>
                        <hr className='hr' />

                        <p>The most fundamental requirement of a fighting game is an input system, so naturally this was the very first thing we created. Ascendance input system consists of 3 things that work in tandem: Input stream, move state, and move links.</p>
                        <p><i>Input Stream > Move Link > Move State</i></p>
                    </Col>

                    <Col xl={5} className='fade-in'>
                        
                        <Image src={img3} fluid rounded  />
                    </Col>

                    <Col xl={7} className='fade-in'>                       
                    <p><strong>Input Stream:</strong> The last 0.25 seconds of player input is saved in an input stream.</p>
                    <p><strong>Move link:</strong> Data that is required to link to another move, such as the required input, when to move to the next link, the cancel window, etc. This link can either link to other move states or other move links.</p> 
                    <p><strong>Move state:</strong> A state which a character is in. Can only be in 1 state at a time. This state stores information such as, animation to play, damage dealt, speed of attack, etc. Move state also contains move links to other move states.</p> 
                    </Col>

                    <Col xl={5} className='fade-in'>
                        <Image src={img4} fluid rounded  />
                    </Col>
 
                </Row>

                {/* Lobby */}
                <Row className="justify-content-md-center">                                 
                    <Col xl={7} className='fade-in'>                 
                        <h5 className='semi-heading'>Create/Find Game Sessions with Lobbies</h5>
                        <p className='small-text' >Description here</p>
                        <hr className='hr' />

                        <p className='mt-4'>Ascendance uses online subsystem steam to find and create game sessions. Anyone can create a game session, and after creation, it is seen by all players that are playing this game via steam. After creation, the host moves to the lobby and other players can now join this lobby.</p>                   
                        <p>In the Lobby, the host can manage the game rules and team members of the game. Only the host is allowed to change game rules, while the client sees real time updates of the game rules that host changes. All players can change their player character, which updates for everyone in the lobby.</p>
                    
                    </Col>
                    <Col xl={5} className='fade-in'>
                        <Image src={img2} fluid rounded  />
                    </Col>
                </Row> 

                {/* AI Bots */}
                <Row className="justify-content-md-center">
                    <Col xl={7} className='fade-in'>                        
                        <h5 className='semi-heading'>AI Bots</h5>
                        <p className='small-text' >Description here</p>
                        <hr className='hr' />

                        <p className='mt-4'>Initially, the game was created as a pure PVP game. I later decided to add AI bots and have co-op elements. There are two types of AI bots in this game:</p>                       

                        <ol>
                            <li>Campaign Bots: These are bots that resemble the type of AI enemies in regular fighting games that have predictable attacks. They can be slower, have less impactful abilities, and can be beaten in groups. There are also Boss characters that have higher health, bigger attack range, higher damage, and more impactful attacks</li>
                            <br/>
                            <li>PVP Bots: These bots are meant to be indistinguishable from human players. They use the same characters that players do. The attacks,combos and abilities are the same as the player characters. Their attacks are unpredictable and they strafe around and dodge attacks, perform complex combos like juggle attacks and canceling into abilities.</li>
                        </ol>
                    
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
                    {/* Game Design */}
                    <Col xl={7} className='fade-in'>                       
                        <h5 className='semi-heading'>Game Design and Balance</h5>
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