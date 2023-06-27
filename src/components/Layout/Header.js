import { Fragment } from "react";
import classes from './Header.module.css';
import image from '../../Images/p1.jpg';
import HeaderCartButton from "./HeaderCartButton";
import {Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from '../../../src/Images/app_logo1.jpg'


const Header=(props)=>{
    return(
        <Fragment>
            <header className={classes.header}>
                
                    <img src={logo} className={classes.imglogo}></img>
                    <h1>Wishipping</h1>
                
                <HeaderCartButton onClick={props.onShowCart}/>

               <Link to='/'> <Button  className={classes.logout} variant="success">Logout</Button></Link>
            </header >
            
            <div className={classes['main-image']}>
                <img src={image} alt="Welcome to shop anytime, ANYWHERE" />
            </div>
        </Fragment>
    )
}
export default Header;