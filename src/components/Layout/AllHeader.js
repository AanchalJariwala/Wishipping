import { Fragment } from "react";
import classes from './AllHeader.module.css';
import logo from '../../../src/Images/app_logo1.jpg';
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const AllHeader=(props)=>{
    return(
        <Fragment>
            <header className={classes.header}>    
                    <img src={logo} className={classes.imglogo}></img> 
                    <h3 className={classes.title}>Wishipping</h3>   
                    <Link to='/'> <Button  className={classes.logout} variant="success">Logout</Button></Link>    
            </header>
             
        </Fragment>
    )
}
export default AllHeader;