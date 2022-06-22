import React, { Component } from 'react';
import './Sidebar.css';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import faceLife_thumb from '../pages/faceLife/thumb.png';
import portfolioSite_thumb from '../pages/replacementHeads/thumb_robots.png';
import ascendance_thumb from '../pages/ascendance/ascendance_thumb.jpg';
// import ascendance_thumb from '../pages/ascendance/NewSplash3.jpg';
import l_img from '../pages/about_me/l-logo_edit.png';
import g_img from '../pages/about_me/g-logo_edit.png';


class SideBar extends Component {

    constructor(props){
        super(props);

        const currentSelected = null;
    }

    addImage = (url,newRoute,title, fontClass='') => {
        const {onRouteChange} = this.props;

        return (
            <div className='s-item i-item'>
                <Image className='my-image' src={url} onClick={(item) => {this.calculateCurrentItem(item,newRoute)}} fluid rounded />
                <div className={`text-image shadow-lg bright-text ${fontClass}`}>{title}</div>
            </div>
        );
    } 

    addText = (newRoute,titleText)=> {
        const {onRouteChange} = this.props;

        return (
            <p className='text-image-selector fs-5 s-item'>
                <div className='' onClick={(item) => {this.calculateCurrentItem(item,newRoute)}} >{`${titleText}`}</div>
            </p>
        );
    }

    calculateCurrentItem = (item,newRoute) => {
        const {onRouteChange} = this.props;

        item.target.parentElement.className += ' active';
        // console.log('new selected: ', item)

        if (this.currentSelected != null){
            // console.log('old item: ', this.currentSelected);
            const newString = this.currentSelected.target.parentElement.className;
            this.currentSelected.target.parentElement.className = newString.replace(' active','');
        }

        this.currentSelected = item;

        return onRouteChange(newRoute);
    }

    render(){


        //need to set function to set class as active on the item that is selected.

        return (


            <div className='wrapper'> 
                <div className="sidebar text-center ">

                    {/* <p className="text-image-selector fs-5 s-item">About Me</p> */}
                    {this.addText('aboutMe','About Me')}
                    {/* {this.addImage('https://media-exp1.licdn.com/dms/image/C5603AQFaB6Bi-ahMuQ/profile-displayphoto-shrink_200_200/0/1526326293383?e=1661385600&v=beta&t=IyILXw9qE55D0T0mZg728EmibFzsGwWH7W7tWCHRgSU','aboutMe', 'About Me')} */}

                    <hr />
 
                    {this.addImage(faceLife_thumb,'faceLife','Face Life')}
                    {this.addImage(ascendance_thumb,'ascendance','Ascendance','ascendance-font-big')}
                    {this.addImage(portfolioSite_thumb,'portfolioSite', 'Portfolio Website')}                           
                    {this.addImage('https://picsum.photos/id/193/200/120','projects', 'All Projects')}

                    {/* <p className="text-image-selector fs-5 s-item bright-text">All Projects</p> */}

                    <hr/>
                     <div className='delay-text header-css'>
                        <a href='https://github.com/khizer22' target="_blank" className='small-text'><img id='l-logo' alt='linkedin logo' src={g_img} width='40px'/></a>
                        <a href='https://ca.linkedin.com/in/khizermahboob' target="_blank" className='small-text'><img id='l-logo' alt='linkedin logo' src={l_img} width='40px'/></a>
                    </div>


                </div>
            </div>

        );
    }
}

export default SideBar;