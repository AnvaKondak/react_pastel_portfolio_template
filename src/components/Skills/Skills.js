import PageHeader from "../PageHeader/PageHeader";
import classes from "../Skills/skills.module.css";
import city from '../../img/city.png';

const listTitleStyle = {
    fontWeight: 900, 
    color: '#fff', 
    marginBottom: '4px'
}

const backendSkills = <ul>
    <li style={ listTitleStyle }>BACKEND</li>
    <br/>
    <li>Express, Rails,</li>
    <li>Java, MongoDB, Shell</li>
</ul>

const frontendSkills = <ul>
    <li  style={ listTitleStyle }>FRONTEND</li>
    <br/>
    <li>React, Angular,</li>
    <li>HTML, CSS, JavaScript, TypeScript</li>
</ul>

const otherSkills = <ul> 
    <li style={ listTitleStyle }>OTHER</li>
    <br/>
    <li> Git, VBA, Alteryx, UiPath, ESP,</li>
    <li>Mockito, Jasmine, Protractor</li>
</ul>

const totalSkills = [
    backendSkills, 
    frontendSkills, 
    otherSkills
]; 


const Skills = () => {
    return ( 
    <div style={{ 
          backgroundColor: '#f4c4c4'
      }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#74647c" fill-opacity="1" d="M0,32L34.3,58.7C68.6,85,137,139,206,186.7C274.3,235,343,277,411,250.7C480,224,549,128,617,96C685.7,64,754,96,823,122.7C891.4,149,960,171,1029,192C1097.1,213,1166,235,1234,229.3C1302.9,224,1371,192,1406,176L1440,160L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path>
</svg>
    <div className={classes.Skills} id = "skills">
        <PageHeader title="Skills" color='#ec6c44'/>
            <br/>
        <div className="row justify-content-center">
        <div className="col-4"></div>
                 <div className="col-4"></div>
                </div>
                <div className = {classes.Container} data-aos="fade-up">
                    {totalSkills.map(skills => {
                        return (
                            <div className = {classes.List}>
                                {skills}
                                </div>
                        )
                    })}
                </div>
    </div>  
    </div>);
}

export default Skills;
