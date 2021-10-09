// import { FaYoutube, FaGithub, FaLinkedin } from "react-icons/fa";
import PageHeader from '../PageHeader/PageHeader';
import classes from './contact.module.css';

const handleUrl = (url) => {
    return event => window.open(url, "_blank")
}
const Contact = () => {
    return (
    <div className={classes.lab_social_icon_footer} id = "contact">
<link href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet" />
<div className="container">
        <div className="text-center center-block" >
                <a href="https://www.facebook.com/bootsnipp"><i id={classes.socialfb} className="fa fa-facebook-square fa-3x social"></i></a>
	            <a href="https://twitter.com/bootsnipp"><i id={classes.socialtw} className="fa fa-twitter-square fa-3x social"></i></a>
	            <a href="https://plus.google.com/+Bootsnipp-page"><i id={classes.socialgp} className="fa fa-google-plus-square fa-3x social"></i></a>
	            <a href="mailto:#"><i id={classes.socialem} className="fa fa-envelope-square fa-3x social"></i></a>
    </div>
</div>
</div>
     );
}
 
export default Contact;