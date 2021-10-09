import classes from './pageheader.module.css'; 

const PageHeader = (props) => {
    return ( <div className={classes.Container} data-aos="fade-up">
        <hr />
        <h1 style={{color: props.color}}>{props.title}</h1>
    </div> );
}
 
export default PageHeader;