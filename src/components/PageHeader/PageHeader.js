import classes from './pageheader.module.css'; 

const PageHeader = (props) => {
    return ( <div className={classes.Container}>
        <hr />
        <h1 style={{color: props.color}}>{props.title}</h1>
    </div> );
}
 
export default PageHeader;