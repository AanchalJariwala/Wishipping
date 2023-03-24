import React, { Fragment } from "react";
import classes from './Header.module.css';
import image from '../../Images/p1.jpg';
import HeaderCartButton from "./HeaderCartButton";


const Header=props=>{
    return(
        <Fragment>
            <header className={classes.header}>
                <h1 className={classes.title}>Instant-Get</h1>
                <HeaderCartButton onClick={props.onShowCart}/>
            </header >
            <div className={classes['main-image']}>
                <img src={image} alt="Welcome to shop anytime ANYWHERE" />
            </div>
        </Fragment>
    )
}
export default Header;