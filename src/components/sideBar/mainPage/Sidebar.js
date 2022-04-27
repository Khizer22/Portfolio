import React, { Component } from 'react';
import './Sidebar.css';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';



class SideBar extends Component {

    constructor(props){
        super(props);
    }

    imageClick = () => {
        console.log('Click');
    } 

    render(){

        const {onRouteChange} = this.props;

        return (

            // <div className='wrapper'>
            //     <nav id="sidebar">
                
            //     </nav>
            // </div>
            <div className='wrapper'>
                <nav id='sidebar'>
                    <div className="p-2 text-center" >
                        <p className="">
                            <span className="fs-4 p-2">Home</span>
                        </p>
                        <hr />
                        <p className="nav-link text-white" aria-current="page">
                                Projects
                        </p>
                        <ul className="rounded nav nav-pills flex-column mb-auto">
                            <li >
                                <Image src='https://picsum.photos/id/190/240/120' onClick={() => onRouteChange('faceLife')} fluid rounded className='' />
                                <div className='text-image shadow-lg '>Face Life</div>
                            </li>    
                            <li >
                                <Image src='https://picsum.photos/id/186/240/120' onClick={() => onRouteChange('replacementHeads')} fluid rounded className='' />
                                <div className='text-image shadow-lg'>Replacement Heads</div>
                            </li> 
                            {/* <li>
                                <Button class="btn-dark">
                                    <img src="https://picsum.photos/240/120"  /> 
                                </Button>
                            </li> */}
                        </ul>
                        <hr />

                        <p className="nav-link text-white text-center" aria-current="page">
                                Game Projects
                        </p>

                        <ul className="nav nav-pills flex-column mb-auto">
                            <li >
                                <Image src='https://picsum.photos/id/120/240/120' onClick={() => onRouteChange('ascendance')} fluid rounded className='' />
                                <div className='text-image'>Ascendance</div>
                            </li>    
                            <li >
                                <Image src='https://picsum.photos/id/126/240/120' onClick={() => onRouteChange('zedFighter')} fluid rounded className='' />
                                <div className='text-image'>Zed Fighter</div>
                            </li> 
                            
                        </ul>

                        {/* <Button className="nav-link text-white ">
                                Contact
                        </Button> */}
        
                    </div>
                </nav>
            </div>
        );
    }
}

export default SideBar;