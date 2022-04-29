import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import './BasePageIndividual.css'

class BasePageInidividual extends React.Component {

    constructor(props){
      super(props);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    addBodyCol(colSize,title,subTitle,body){
        return(
            <Col xl={colSize} className='fade-in'>
                <h1 >{title}</h1>
                <h5 className='font-weight-light'>{subTitle}</h5>
                <p className='mt-4'>{body}</p>
            </Col>
        );
    }

    addImageCol(colSize,imageURL){
        return(
            <Col xl={colSize}  md="auto" className='fade-in'>
                <Image src={imageURL} fluid rounded  />
            </Col>
        );
    }

    addSplashPage(imageURL){
        return(
            // <Row >
             <div className='center splash-image'>
                <Image src={imageURL} fluid rounded className='fade-slide-in' />
             </div>
            // </Row>
        );
    }

    // render(){

    //     return (

    //         <div className='shadow-lg'>

    //         </div>

    //     );
    // }
}

export default BasePageInidividual;