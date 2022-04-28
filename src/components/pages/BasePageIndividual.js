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
            <Row >
                <Image src={imageURL} fluid rounded className='fade-slide-in' />
            </Row>
        );
    }

    render(){

        return (

            <div className='shadow-lg'>

            {/* {this.addRowOfInfo} */}
            {/* <Row className=''>

                <Image src='https://picsum.photos/id/50/900/600' fluid rounded className='' />

            </Row>
            <Row className="justify-content-md-center">
                <Col xl={6}>
                    <h1 className=''>Face Life</h1>
                    <h5 className='font-weight-light'>Display picture attributes</h5>
                    <p className='mt-4'>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                </Col>
                <Col xl={6}  md="auto">
                    <Image src='https://picsum.photos/id/50/700/400' fluid rounded className='' />
                </Col>
            </Row>

            <Row className=''>
                <Col xl={6}>
                    <h3 className='font-weight-light'>Features</h3>
                    <p className='mt-4'>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                </Col>
                <Col xl={6}>
                    <Image src='https://picsum.photos/id/51/700/400' fluid rounded className='' />
                </Col>
                
            </Row> */}
        </div>

        );
    }
}

export default BasePageInidividual;