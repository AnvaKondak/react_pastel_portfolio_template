import classes from './about.module.css'
import PageHeader from '../PageHeader/PageHeader';
import me from '../../img/me.png'
const About = () => {
    return ( <div className={classes.AboutMe} id = "about">
        <PageHeader title='About'/>
        <div className={classes.Container}>
            <div className={classes.Text}>
                <h2>A little about me!</h2>
                <p>
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
                <img className = {classes.Me} src={me} alt="me!" />
            </div>
        </div>
    </div> );
}
 
export default About;