import classes from './Checkout.module.css';
import { useRef, useState, useContext } from 'react';
import CartContext from '../../store/cart-context';
import { Link } from 'react-router-dom';
import formIsValid from './Checkout';
import React from 'react';
import { Form } from 'react-bootstrap';


const isEmpty = value => value.trim() === "";
const isSixChar = value => value.length === 6;

const Checkout = (props) => {
    const ref = React.useRef();
    function reset(ev) {
        ev.preventDefault();

        ref.current.reset();
     
        setFormInputValidity({
            name: true,
            email: true,
            street: true,
            postalCode: true,
            city: true,
            state: true,
            country: true,
        })
 
      }
    
    const [formInputValidity, setFormInputValidity] = useState({
        name: true,
        email: true,
        street: true,
        postalCode: true,
        city: true,
        state: true,
        country: true,
    });
    const nameInputRef = useRef();
    const emailInputRef = useRef();
    const streetInputRef = useRef();
    const postalCodeInputRef = useRef();
    const cityInputRef = useRef();
    const stateInputRef = useRef();
    const countryInputRef = useRef();

    const confirmHandler = (event) => {
        event.preventDefault();
       
       
        const enteredName = nameInputRef.current.value;
        const enteredEmail = emailInputRef.current.value;
        const enteredStreet = streetInputRef.current.value;
        const enteredPostalCode = postalCodeInputRef.current.value;
        const enteredCity = cityInputRef.current.value;
        const enteredState = stateInputRef.current.value;
        const enteredCountry = countryInputRef.current.value;

       
        const enteredNameIsValid = !isEmpty(enteredName);
        const enteredEmailIsValid = !isEmpty(enteredEmail);
        const enteredStreetIsValid = !isEmpty(enteredStreet);
        const enteredPostalIsValid = isSixChar(enteredPostalCode) ;
        const enteredCityIsValid = !isEmpty(enteredCity);
        const enteredStateIsValid = !isEmpty(enteredState);
        const enteredCountryIsValid = !isEmpty(enteredCountry);

        const formIsValid =
            enteredNameIsValid
            && enteredEmailIsValid
            && enteredStreetIsValid
            && enteredPostalIsValid
            && enteredCityIsValid
            && enteredStateIsValid
            && enteredCountryIsValid

        setFormInputValidity({
            name: enteredNameIsValid,
            email: enteredEmailIsValid,
            street: enteredStreetIsValid,
            postalCode: enteredPostalIsValid,
            city: enteredCityIsValid,
            state: enteredStateIsValid,
            country: enteredCountryIsValid,
        })

        if (!formIsValid) {
            return ;
        }
        //submit data
    }
    const nameControlClasses = `${classes.control} ${formInputValidity.name ? "" : classes.invalid}`;
    const emailControlClasses = `${classes.control} ${formInputValidity.email ? "" : classes.invalid}`;
    const streetControlClasses = `${classes.control} ${formInputValidity.street ? "" : classes.invalid}`;
    const postalCodeControlClasses = `${classes.control} ${formInputValidity.postalCode ? "" : classes.invalid}`;
    const cityControlClasses = `${classes.control} ${formInputValidity.city ? "" : classes.invalid}`;
    const stateControlClasses = `${classes.control} ${formInputValidity.state ? "" : classes.invalid}`;
    const countryControlClasses = `${classes.control} ${formInputValidity.country ? "" : classes.invalid}`;

    //Code to clear cart when pressed on continue 
    const cartCtx = useContext(CartContext);
    const submitOrderHandler = () => {
        cartCtx.clearCart();
    }
   

    return (
       
        <form ref={ref} className={classes.form} onSubmit={confirmHandler}>
            <h2>Please Enter the Below Form to Proceed Further </h2>
            <div
                className={nameControlClasses}>
                <label htmlFor='name'>Name</label>
                <input type="text" id="name" ref={nameInputRef} />
                {!formInputValidity.name && <p>Please enter your name!</p>}
            </div>
            <div
                className={emailControlClasses}>
                <label htmlFor='email'>Email-id</label>
                <input type="email" id="email" ref={emailInputRef} />
                {!formInputValidity.email && <p>Please enter a valid Email!</p>}
            </div>

            <div className={streetControlClasses}>
                <label htmlFor='street'>Shipping Address</label>
                <input type="text" id="street" ref={streetInputRef} />
                {!formInputValidity.street && <p>Please enter your street address!</p>}
            </div>
            <div className={postalCodeControlClasses}>
                <label htmlFor='postal'>Zip/Postal Code</label>
                <input type="text" id="postal" ref={postalCodeInputRef} />
                {!formInputValidity.postalCode && <p>Please enter a valid postal code(6 digit long)!</p>}
            </div>
            <div className={cityControlClasses}>
                <label htmlFor='city'>Town/City</label>
                <input type="text" id="city" ref={cityInputRef} />
                {!formInputValidity.city && <p>Please enter your city!</p>}
            </div>
            <div className={stateControlClasses}>
                <label htmlFor='state'>State/Province</label>
                <input type="text" id="state" ref={stateInputRef} />
                {!formInputValidity.state && <p>Please enter your state!</p>}
            </div>
            <div className={countryControlClasses}>
                <label htmlFor='country'>Country</label>
                <input type="text" id="country" ref={countryInputRef} />
                {!formInputValidity.country && <p>Please enter your Country name!</p>}
            </div>
            <div className={classes.actions}>
                <button className={classes.reset} onClick={reset}
            type="button">Reset Form</button>
               <button  className={classes.submit} onConfirm={submitOrderHandler} disabled={!formIsValid}>Continue</button>
            </div>
        </form>
    )
    
}
export default Checkout;