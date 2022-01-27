import React from 'react';
import girl from '../images/girl.jpg'
import './head.css';

function Head(){
    return(
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12 col-lg-6 one'>
                        <a href='#'><h2>MASTER</h2></a>
                    </div>
                    <div className='col-12 col-lg two'>
                        <ul className='link'>
                            <a href='#'><li>Home</li></a>
                            <a href='#'><li>About us</li></a>
                            <a href='#'><li>Contact us</li></a>
                            <a href='#' style={{background : "orange"}}><li>Register</li></a>
                        </ul>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12 col-lg-6 one'>
                        <section>
                            <div><h1>A good</h1> <h1 className='blue'>education</h1><h1> is a foundation for the better future</h1></div>
                            <h5>A community with high expectation and high acadimic achievement</h5>
                            <a href='#'>GET STARTED</a>
                        </section>
                    </div>
                    <div className='col-12 col-lg two'>
                        <section>
                        <img src={girl}></img>
                        <p className='s'>SKILLS</p>
                        <p className='k'>KNOWLEDGE</p>
                        <p className='t'>TALENT</p>
                        <p className='e'>EXPERTNESS</p>

                        </section>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Head;