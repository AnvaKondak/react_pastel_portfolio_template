import classes from './home.module.css'
import code from '../../img/coffee.png'
import engineer from '../../img/engineer.png'
const Home = () => {
    return ( 

     <div className={classes.Home}>
        <div className={classes.Container}>
            <h1 className={classes.Hello}>Hi, I'm Anva{'\n'}</h1>
            <h3>Developer, designer.</h3>
        </div>
        <img className={classes.code} src = {code} alt="code"/>
        <img className={classes.engineer} src = {engineer} alt="code"/>

         </div> 
         
     );
}
 
export default Home;