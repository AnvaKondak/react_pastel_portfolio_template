import classes from './NavBar.module.css'
import { Button,Navbar,Nav,NavItem,NavDropdown,MenuItem } from 'react-bootstrap';


const openNav = () => {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

const closeNav = () => {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}

const NavBar = () => {
    return (
      <div className = {classes.NavBar}>
        <div id="mySidebar" className={classes.sidebar}>
  <a href="javascript:void(0)" className={classes.closebtn} onClick={closeNav}>×</a>
  <a href="/#">Home</a>
  <a href="/#about">About</a>
  <a href="/#skills">Skills</a>
  <a href="/#projects">Projects</a>
  <a href="/#contact">Contact</a>
</div>

<div id="main">
  <button className={classes.openbtn} onClick={openNav}>☰</button>  
</div> 
</div>
     );
}
 
export default NavBar;