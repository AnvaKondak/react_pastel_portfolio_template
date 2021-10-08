import classes from './about.module.css'
import PageHeader from '../PageHeader/PageHeader';
import me from '../../img/me.png'
const About = () => {
    return ( 
    //     <>
    //     <svg style={{position: 'relative'}} className={classes.wave} xmlns="http://www.w3.org/2000/svg" viewBox="0 -10 1440 330">
    //     <path fill="#000" fill-opacity="10" d="M0,128L34.3,144C68.6,160,137,192,206,224C274.3,256,343,288,411,282.7C480,277,549,235,617,197.3C685.7,160,754,128,823,138.7C891.4,149,960,203,1029,213.3C1097.1,224,1166,192,1234,186.7C1302.9,181,1371,203,1406,213.3L1440,224L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
    //   </svg>
    <div className={classes.AboutMe} id = "about">

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
    </div> 

//  </> 
 );
}
 
export default About;