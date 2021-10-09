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

            <div  className={classes.Text}>
                <h2 data-aos="fade-up">A little about me!</h2>
                <p  data-aos="fade-up" data-aos-delay="300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
quia. Quo neque error repudiandae fuga? 
                </p>
            </div>
            <div className={classes.Photo}>
                <img className = {classes.Me} src={me}  data-aos="fade-up" alt="me!" />
            </div>
        </div>
    </div> 

//  </> 
 );
}
 
export default About;