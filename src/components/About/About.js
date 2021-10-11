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
               
I always expected my breakthrough moment to come during a random visit to the MoMA, or perhaps after completing a classic novel. Instead, this moment arrived  when I learned my first JavaScript library- Animate On Scroll.

Creating software that can solve your problems must be one of the most satisfying ways to harness your imagination.

4 years later, I have had the privilege of working at a startup, Upwork (freelancing) and two huge financial institutions. 

Today, I am focused on picking up new skills, responsive design principles, and new programming languages in innovative environments. 
 
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