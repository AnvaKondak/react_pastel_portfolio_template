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
Thanks for visiting! 👋 
Here's a little blurb about me that was written before ChatGBT could make you think I'm cool! 
I’m a full-stack software engineer. For my current role, I specialize in developing powerful libraries for other engineers to build applications on. 
I love working in spaces that thrive on innovation and creativity. 
I value keen, quality-driven collaboration with other passionate engineers to solve difficult problems. 
I’m skilled in React, Angular, Rails, Express, Ruby, JavaScript, and Java. 
In my free time, I enjoy writing short passages, reading fiction novels, and mentoring people that aspire to break into technology.
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
