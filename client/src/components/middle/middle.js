import React from 'react';
import './middle.css';
import Student from '../images/student.webp';

function Middle(){
    return(
        <>
        <div className='container-fluid'>
            <div className='row onee'>
                <div className='col-12 col-md-6 col-lg-3'>
                    <h2>500+</h2>
                    <h4>Total Subject</h4>
                </div>
                <div className='col-12 col-md col-lg-3'>
                    <h2>1000+</h2>
                    <h4>Total Student</h4>
                </div>
                <div className='col-12 col-md-6 col-lg-3'>
                    <h2>200+</h2>
                    <h4>Total Teacher</h4>
                </div>
                <div className='col-12 col-md col-lg'>
                    <h2>700+</h2>
                    <h4>Total Opportunity</h4>
                </div>
            </div>
            <div className='row too'>
                <h1>Working process and Benefits</h1>
                <div className='row'>
                    <div className='col-12 col-md-4 g'>
                            <i className='fa fa-search' style={{color : "blue"}}></i>
                            <h4 style={{color : "blue"}}>Find Course</h4>
                    </div>
                    <div className='col-12 col-md-4 g'>
                            <i className='fa fa-plus' style={{color : "magenta"}}></i>
                            <h4 style={{color : "magenta"}}>Register</h4>      
                    </div>
                    <div className='col-12 col-md g'>
                            <i className='fa fa-certificate' style={{color : "orange"}}></i>
                            <h4 style={{color : "orange"}}>Good to go</h4>
                    </div>
                </div>
            </div>
        </div>
        <div className='container-fluid girl'>
            <div className='row'>
                <div className='col-12 col-lg-7'>
                    <div className='row'>
                        <div className='col-12 col-md-6 b'>
                            <h2>Who we are</h2>
                            <p>We are a well known university. There are many excellent institure under us</p>
                        </div>
                        <div className='col-12 col-md b'>
                            <h2>What we do</h2>
                            <p>We develop the tommarrows younger. Who can stand on their leg very confidently</p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12 col-md-6 b'>
                            <h2>How do we help</h2>
                            <p>We help the student from selecting the goal to aquiring those goad with expert guidance</p>
                        </div>
                        <div className='col-12 col-md b'>
                            <h2>Opportunity</h2>
                            <p>Their are various Opportunity knocking the door of student. Only they have to grab that.</p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12 col-md-6 b'>
                            <h2>Overall attention</h2>
                            <p>We keep attention on the student not only on their study but also on their personality building</p>
                        </div>
                        <div className='col-12 col-md b'>
                            <h2>Create success story</h2>                            
                            <p>There are many student out with great success and valuable knowledge</p>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-md i'>
                    <section className='image'>
                        <img src={Student}></img>
                    </section>
                </div>
            </div>
        </div>
        </>
    )
}

export default Middle;