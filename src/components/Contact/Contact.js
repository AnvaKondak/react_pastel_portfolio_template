// import { FaYoutube, FaGithub, FaLinkedin } from "react-icons/fa";
import PageHeader from '../PageHeader/PageHeader';
import classes from './contact.module.css';

const handleUrl = (url) => {
    return event => window.open(url, "_blank")
}
const Contact = () => {
    return (<div className={classes.Contact} id = "contact">
          <p>https://github.com/anvakondak</p>
    </div>  );
}
 
export default Contact;