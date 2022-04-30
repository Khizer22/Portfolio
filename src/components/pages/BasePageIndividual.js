import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import './BasePageIndividual.css'

class BasePageInidividual extends React.Component {

    constructor(props){
      super(props);

        const title = 'MY TITLE';
        const subTitle = 'MY SUB TITLE';
        const linkURL = ['LINK TITLE','<LINK HERE>'];
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    addFirstBodyCol(colSize,title,subTitle,linkURL,releaseDate=null,body){
        return(
            <Col xl={colSize} className='fade-in'>
                <h1 className='text-center font-weight-light' >{title}</h1>
                <hr/>
                <h5 className=' font-weight-light'>{subTitle}</h5>
                <a href={linkURL[1]} target="_blank" className='' style={{margin: 0}}>{linkURL[0]}</a>
                {releaseDate === null ? null :  <p style={{margin: 0}}>{releaseDate}</p>}
                <p className='mt-4'>{body}</p>      
            </Col>
        );
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