import classes from './about.module.css'
import PageHeader from '../PageHeader/PageHeader';
import React, { useEffect, useState } from 'react';
import Aos from 'aos'; 


import me from '../../img/me.png'
const About = () => {

    useEffect(()=>{
        Aos.init({duration: 2000}); 
    }, []);

    return ( 
    <div className={classes.AboutMe} id = "about">

        <PageHeader title='About' color='#f4c4c4'/>
        <div className={classes.Container}>

            <div className="row justify-content-center"> 
            <div  className={classes.Text} className="col-sm-6" >
                <h2 data-aos="fade-up">A little about me!</h2>
                <p  data-aos="fade-up" data-aos-delay="300">
I always expected my breakthrough moment to come during a random visit to the MoMA, or perhaps after completing a classic novel. 
Instead, this moment arrived  when I learned my first CSS animation library- Animate On Scroll.
4 years later, I have had the privilege of working at a startup, Upwork (freelancing) and two large financial institutions. 
I love working with design and technology in spaces that thrive on innovation and creativity. 
My current focus is on picking up new skills, new programming languages and responsive design principles. 
                </p>
            </div>
          
            <div className="col-sm-6" className={classes.Photo}>
                <img className = {classes.Me} src={me}  data-aos="fade-up" alt="me!" />
            </div>
            </div>
            </div>
        </div>

 );
}
 
export default About;