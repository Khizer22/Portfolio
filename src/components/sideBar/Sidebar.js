import React, { Component } from 'react';
import './Sidebar.css';
import Image from 'react-bootstrap/Image';

class SideBar extends Component {

    constructor(props){
        super(props);
    }

    addImage = (url,newRoute,title) => {
        const {onRouteChange} = this.props;

        return (
            <div className='s-item i-item'>
                <Image src={url} onClick={() => onRouteChange(newRoute)} fluid rounded />
                {/* <div className='text-image shadow-lg '>{title}</div> */}
            </div>
        );
    } 

    render(){

        return (


            <div className='wrapper'> 
                <div className="sidebar p-2 text-center">

                    <p className="active fs-4 p-2 s-item">Home</p>

                    <hr />

                    <p className='s-item'>Projects</p>

                    {this.addImage('https://picsum.photos/id/190/200/120','faceLife')}
                    {this.addImage('https://picsum.photos/id/191/200/120','replacementHeads')}   
                                     
                    <hr />

                    <p className='s-item'>Game Projects</p>
                    {this.addImage('https://picsum.photos/id/192/200/120','ascendance')}
                    {this.addImage('https://picsum.photos/id/193/200/120','zedFighter')}

                </div>
            </div>











            // <div className='wrapper'>
            //     <nav id='sidebar'>
            //         <div className="p-2 text-center" >
            //             <p className="">
            //                 <span className="fs-4 p-2">Home</span>
            //             </p>
            //             <hr />
            //             <p className="nav-link text-white" aria-current="page">
            //                     Projects
            //             </p>
            //             <ul className="rounded nav nav-pills flex-column mb-auto">
            //                 <li >
            //                     <Image src='https://picsum.photos/id/190/240/120' onClick={() => onRouteChange('faceLife')} fluid rounded className='' />
            //                     <div className='text-image shadow-lg '>Face Life</div>
            //                 </li>    
            //                 <li >
            //                     <Image src='https://picsum.photos/id/186/240/120' onClick={() => onRouteChange('replacementHeads')} fluid rounded className='' />
            //                     <div className='text-image shadow-lg'>Replacement Heads</div>
            //                 </li> 
            //                 {/* <li>
            //                     <Button class="btn-dark">
            //                         <img src="https://picsum.photos/240/120"  /> 
            //                     </Button>
            //                 </li> */}
            //             </ul>
            //             <hr />

            //             <p className="nav-link text-white text-center" aria-current="page">
            //                     Game Projects
            //             </p>

            //             <ul className="nav nav-pills flex-column mb-auto">
            //                 <li >
            //                     <Image src='https://picsum.photos/id/120/240/120' onClick={() => onRouteChange('ascendance')} fluid rounded className='' />
            //                     <div className='text-image'>Ascendance</div>
            //                 </li>    
            //                 <li >
            //                     <Image src='https://picsum.photos/id/126/240/120' onClick={() => onRouteChange('zedFighter')} fluid rounded className='' />
            //                     <div className='text-image'>Zed Fighter</div>
            //                 </li> 
                            
            //             </ul>

            //             {/* <Button className="nav-link text-white ">
            //                     Contact
            //             </Button> */}
        
            //         </div>
            //     </nav>
            // </div>
        );
    }
}

export default SideBar;