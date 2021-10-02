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
    return ( <div className={classes.Youtube} id = "projects">
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
    </div>);
}
 

export default Youtube;