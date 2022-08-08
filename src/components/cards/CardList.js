import React from 'react';
     // import Row from 'react-bootstrap/Row';
     // import Col from 'react-bootstrap/Col';
import ProjectCards from './ProjectCards';
import CardGroup from 'react-bootstrap/CardGroup';
import './ProjectCards.css';
import unLivingImg from './imgs/UnLiving.png';
import ghostSideImg from './imgs/GhostSide.png';
import zedFighterImg from './imgs/ZedFighter.png';
import magicMirrorcleImg from './imgs/MagicMirrorcle.png';
import boneManImg from './imgs/BoneMan.png';
import replacementHeadsImg from './imgs/robots_1.png';

const CardList = (props) => {
     return (
       
          <div>
               <CardGroup className='pb-5' >
                    <ProjectCards cardImage={ghostSideImg}  
                    cardTitle='GhostSide' 
                    cardExtraInfo='Unreal Engine 4 | Blueprints | Steam Enabled'
                    cardText='Play with a friend to eliminate enemies in a wave based shooter. Includes different weapon types.'
                    cardLink={'Gameplay Video'}
                    />

                    <ProjectCards cardImage={zedFighterImg}  
                    cardTitle='ZedFighter' 
                    cardExtraInfo='SDL | C++ | Custom AI'
                    cardText='Top down shooter. Kill the bad guys to escape!'
                    cardLink={'Gameplay Video'}
                    />

                    <ProjectCards cardImage={unLivingImg} 
                    cardTitle='UnLiving Robots' 
                    cardExtraInfo='C# | Unity | Multiplayer - Cooperative'
                    cardText='Save the earth from a robot alien invasion. Defeat the spider boss to save Earth. Use different types of weapons to defeat your enemies!'
                    cardLink={'Gameplay Video'}
                    />
               </ CardGroup>

               <CardGroup className='pb-5'>
                    <ProjectCards cardImage={boneManImg}  
                    cardTitle='BoneMan' 
                    cardExtraInfo='Java | Android Studio'
                    cardText='Android enabled endless runner. Run as far as you can to gain the highest score. Collect spiders to get additional points!'
                    cardLink={'Gameplay Video'}
                    />

                    <ProjectCards cardImage={replacementHeadsImg}   
                    cardTitle='Replacement Heads' 
                    cardExtraInfo='Javascript | React'
                    cardText='Lost your head? No worries, here are some replacements. Search for the perfect one right here.'
                    cardLink={'Website Link'}
                    />

                    <ProjectCards cardImage={magicMirrorcleImg}  
                    cardTitle='Magic Mirrorcle' 
                    cardExtraInfo='Unreal Engine 4 | Cooperative Puzzle Game | ToJam 2017?'
                    cardText='Puzzle game'
                    cardLink={'Gameplay Video'}
                    />
               </ CardGroup>
          </div>
          

    );
}

export default CardList;