import classes from './home.module.css'
import Typist from 'react-typist'
import code from '../../img/coffee.png'
import engineer from '../../img/engineer.png'
import React, {useState} from 'react'; 

const Home = () => {
const [isScrolling, setIsScrolling] = useState(false); 

let mybutton = document.getElementById("myBtn");

 window.onscroll = ()=> {scrollFunction()};
 
const scrollFunction = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    setIsScrolling(true);
  } else {
   setIsScrolling(false);
  }
}


    return ( 
    <>
     <div className={classes.Home}>
      <div className={classes.Container}>
          <Typist cursor={{show: false}}>
            <Typist.Delay ms={300}/>
              <span>&lt;body&gt;</span>
          </Typist>
        <div className={classes.Description}>
        <Typist cursor={{show: false}}>
              <Typist.Delay ms={600}/>
              <span>&lt;h1&gt;</span>
              <h2>Hi<br/>I'm Anva.<br/>Developer, Designer.</h2>
              <span>&lt;/h1&gt;</span>
          </Typist>
        </div>
        <Typist cursor={{show: false}}>
              <Typist.Delay ms={3500}/>
              <span>&lt;/body&gt;</span>
          </Typist>
        </div>
         </div> 
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#f4c4c4" fill-opacity="1" d="M0,64L30,69.3C60,75,120,85,180,122.7C240,160,300,224,360,218.7C420,213,480,139,540,96C600,53,660,43,720,53.3C780,64,840,96,900,122.7C960,149,1020,171,1080,176C1140,181,1200,171,1260,165.3C1320,160,1380,160,1410,160L1440,160L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path>
</svg>

<a href='/#'><button id={classes.myBtn} style={isScrolling ? { display:'block'} : {display : 'none'} } title="Go to top"><p>Top</p></button></a>
         </>
     );
}
 
export default Home;