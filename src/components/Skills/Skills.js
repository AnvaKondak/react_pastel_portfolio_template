import PageHeader from "../PageHeader/PageHeader";
import classes from "../Skills/skills.module.css";
import city from '../../img/city.png';

const listTitleStyle = {
    fontWeight: 900, 
    color: '#9B1FE8', 
    marginBottom: '4px'
}

const backendSkills = <ul>
    <li style={ listTitleStyle }>BACKEND</li>
    <li>Java - SQL - Shell</li>
    <li>Express.js - Spring Boot</li>
</ul>

const frontendSkills = <ul>
    <li  style={ listTitleStyle }>FRONTEND</li>
    <li>ReactJS - Angular</li>
    <li>HTML - CSS</li>
</ul>

const otherSkills = <ul>
    <li style={ listTitleStyle }>OTHER</li>
    <li>Git - JSON - Jenkins</li>
    <li> XML - VBA</li>
</ul>

const totalSkills = [
    backendSkills, 
    frontendSkills, 
    otherSkills
]; 


const Skills = () => {
    return ( <div className={classes.Skills} id = "skills">
        <PageHeader title="Skills" />
        <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem.
                </p>
                <div className = {classes.Container}>
                    {/* <img src = {city} alt = "city" className={classes.city}/> */}
                    {totalSkills.map(skills => {
                        return (
                            <div className = {classes.List}>
                                {skills}
                                </div>
                        )
                    })}
                </div>
    </div>  );
}

export default Skills;