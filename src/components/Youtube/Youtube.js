import PageHeader from '../PageHeader/PageHeader';
import classes from './youtube.module.css';
import AR from '../../img/AR.png';

const githubsrc = (url, thumbnail, description) => {
    return (
        <a href={url} style = {{textDecoration: 'none'}}>
    <div className={classes.VideoContainer}>
   
        <div className={classes.Thumbnail}>
            <img src = {thumbnail} alt = "thumbnail"></img>
            </div>
        <div className={classes.Text}>
            <p>{description}</p>
        </div>
   
    </div>
    </a>); 
}

const ARprojdescription = 'In this project, I Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis har'; 
const weatherprojdescription = 'In this project, I Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis har'; 

const Youtube = () => {
    return (
        <div style={{ background: 'rgb(32,0,36)',
            background: 'linear-gradient(90deg, rgba(32,0,36,1) 47%, rgba(104,9,121,1) 100%, rgba(0,212,255,1) 100%)'
           }}> <div className={classes.Youtube} id = "projects">
        <PageHeader title={"Projects"} />
        <div className = {classes.Content}>
            <div className={classes.Paragraph}>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi.
                </p>
            </div>
            <div className = {classes.Videos}>
            {githubsrc('https://github.com/anvakondak', AR, ARprojdescription)}
            {githubsrc('https://github.com/anvakondak', AR, weatherprojdescription)}
        </div>
    </div> 
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    <path fill="#141313" fill-opacity="1" d="M0,32L34.3,58.7C68.6,85,137,139,206,186.7C274.3,235,343,277,411,250.7C480,224,549,128,617,96C685.7,64,754,96,823,122.7C891.4,149,960,171,1029,192C1097.1,213,1166,235,1234,229.3C1302.9,224,1371,192,1406,176L1440,160L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path>
  </svg>
  </div>
    );
}
 

export default Youtube;