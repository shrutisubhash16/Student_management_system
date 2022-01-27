import React from 'react';
import './footer.css';

function Footer(){
    return(
        <>
        <div className='container-fluid n'>
            <div className='row'>
                <div className='col-12 col-md-3 m'>
                    <h2>MASTER</h2>                    
                    <p>Our goal is to develop tommarrows generation with great success</p>
                    <section><i className='fa fa-google-plus'></i><i className='fa fa-twitter'></i><i className='fa fa-facebook'></i><i className='fa fa-linkedin'></i><i className='fa fa-instagram'></i></section>
                </div>
                <div className='col-12 col-md-3 m'>
                    <h3>About</h3>                    
                    <a>Our Story</a>
                    <a>Our position</a>
                    <a>Empower Us</a>
                    <a>How it work</a>
                    <a>Blog</a>
                </div>
                <div className='col-12 col-md-3 m'>
                    <h3>Learning</h3>
                    <a>Get App</a>
                    <a>Testimonial</a>
                    <a>FAQ</a>
                    <a>Contact</a>
                </div>
                <div className='col-12 col-md m'>
                    <h3>More</h3>
                    <a>Inbox</a>
                    <a>News Paris</a>
                    <a>Free personality Test</a>
                </div>
            </div>
        </div>
        </>
    );
}

export default Footer;