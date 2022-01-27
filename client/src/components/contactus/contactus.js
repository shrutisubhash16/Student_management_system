import React from 'react';
import './contactus.css';
import Phone from '../images/phone.jpg';

function Contact(){
    return(
        <>
          <div className='container'>
              <div className='row'>
                  <div className='col-12 col-md-6 p'>
                        <img src={Phone} alt='Phone'/>
                  </div>
                  <div className='col-12 col-md'>
                      <h1 style={{color : "navy"}}>Contact Us</h1>
                      <div className='row f'>
                        <section className="field">
                            <p>Name</p>
                            <input type="text" class= "text" placeholder="Enter your name"/>
                        </section>
                        <section className="field">
                            <p>Email Address</p>
                            <input type="text" class= "text" placeholder="Enter your Email"/>
                        </section>  
                        <section className="field">
                            <p>Subject</p>
                            <input type="text" class= "text" placeholder="Enter the subject"/>
                        </section>
                        <section className="field">
                            <p>Message</p>
                            <textarea  class="textarea" placeholder="Tyepe your message" rows="4" cols="50"></textarea>
                        </section>
                        <section className='submit'>
                            <a href='#'><p>Get in Touch</p></a>
                        </section>
                      </div>
                      
                  </div>
              </div>
          </div>
        </>
    );
}

export default Contact;