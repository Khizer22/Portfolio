import React, { Component } from 'react';
import './Sidebar.css';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import faceLife_thumb from '../pages/faceLife/thumb.png';
import portfolioSite_thumb from '../pages/replacementHeads/thumb_robots.png';
import ascendance_thumb from '../pages/ascendance/ascendance_thumb.jpg';
// import ascendance_thumb from '../pages/ascendance/NewSplash3.jpg';


class SideBar extends Component {

    constructor(props){
        super(props);

        const currentSelected = null;
    }

    addImage = (url,newRoute,title, fontClass='') => {
        const {onRouteChange} = this.props;

        return (
            <div className='s-item i-item'>
                <Image className='my-image' src={url} onClick={(item) => {

                    item.target.parentElement.className += ' active';
                    // console.log('new selected: ', item)

                    if (this.currentSelected != null){
                        // console.log('old item: ', this.currentSelected);
                        const newString = this.currentSelected.target.parentElement.className;
                        this.currentSelected.target.parentElement.className = newString.replace(' active','');
                    }

                    this.currentSelected = item;

                    return onRouteChange(newRoute);
                    }} fluid rounded />
                <div className={`text-image shadow-lg bright-text ${fontClass}`}>{title}</div>
            </div>
        );
    } 

    render(){


        //need to set function to set class as active on the item that is selected.

        return (


            <div className='wrapper'> 
                <div className="sidebar text-center ">

                    <p className="fs-4 s-item">About Me</p>

                    <hr />

                    <p className="fs-5 s-item bright-text">My Projects</p>

                    
                    {this.addImage(faceLife_thumb,'faceLife','Face Life')}
                    {this.addImage(ascendance_thumb,'ascendance','Ascendance','ascendance-font-big')}
                    {this.addImage(portfolioSite_thumb,'portfolioSite', 'Portfolio Website')}                           
                    {this.addImage('https://picsum.photos/id/193/200/120','projects', 'All Projects')}


                </div>
            </div>

        );
    }
}

export default SideBar;