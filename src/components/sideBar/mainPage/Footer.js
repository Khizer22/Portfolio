import React from 'react';
import Container from 'react-bootstrap/Container';

const Footer = (props) => {
    return (
        
        <footer className='py-5 my-5 bg-dark'>
            <Container className='px-4'>
                <p className='text-center text-white'>
                    Copywright &copy; Khizer Mahboob 2022
                </p>
            </Container>
        </footer>
        
    );
}

export default Footer;