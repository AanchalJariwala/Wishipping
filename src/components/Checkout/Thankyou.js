import React from 'react';
import classes from './Thankyou.module.css';
import { Link } from "react-router-dom";
import { Fragment } from "react";
import logo from '../../../src/Images/app_logo1.jpg';
import { Button } from "react-bootstrap";

const Thankyou = () => {
 
  return (

    <div>
      <Fragment>
        <header className={classes.header}>
          <img src={logo} className={classes.imglogo}></img>
          <h2 className={classes.title}>Wishipping</h2>
          <Link to='/'> <Button className={classes.logout} variant="success">Logout</Button></Link>
        </header>

      </Fragment>
      <div className={classes.thanks}>

        Thanks for ordering!!
      </div>
      <div className={classes.continuebutton}>


        <Link to='/HomePage'><button className={classes.button}>Continue Shopping...</button></Link>
      </div>

    </div>
  )
}

export default Thankyou
