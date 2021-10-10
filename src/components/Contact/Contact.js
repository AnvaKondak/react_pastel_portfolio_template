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
                 <a href="https://www.linkedin.com/in/anvakondak/"><i id={classes.socialli} className="fa fa-linkedin-square fa-3x social"></i></a>
	            <a href="https://github.com/anvakondak"><i id={classes.socialgi} className="fa fa-github-square fa-3x social"></i></a>
	            <a href="mailto:anvakondak@gmail.com"><i id={classes.socialem} className="fa fa-envelope-square fa-3x social"></i></a>
    </div>
</div>
</div>
     );
}
 
export default Contact;