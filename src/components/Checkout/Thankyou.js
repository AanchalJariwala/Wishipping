import React from 'react';
import classes from './Thankyou.module.css';
import { Link } from "react-router-dom";
const Thankyou = () => {
  return (
    <div className='backgroundlast'>


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
