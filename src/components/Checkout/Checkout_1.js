import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import { Formik } from "formik";
import React, { useState } from 'react';
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import * as axios from 'axios';
import { BASE_URL } from '../../contants';
import classes from './Checkout.module.css'
import AllHeader from '../Layout/AllHeader';

// const { Formik } = formik;

const schema = yup.object().shape({
    firstName: yup.string().required("This field is compulsory"),
    lastName: yup.string().required("This field is compulsory"),
    email: yup.string().required("This field is compulsory"),
    address1: yup.string().required("This field is compulsory"),
    address2: yup.string().required("This field is compulsory"),
    city: yup.string().required("This field is compulsory"),
    state: yup.string().required("This field is compulsory"),
    country: yup.string().required("This field is compulsory"),
    zip: yup.string().required("This field is compulsory"),
    cardno: yup.string().required("This field is compulsory"),
    bzip: yup.string().required("This field is compulsory"),
    expmonth: yup.string().required("This field is compulsory"),
    expyear: yup.string().required("This field is compulsory"),
    cvc: yup.string().required("This field is compulsory"),
    terms: yup.bool().required().oneOf([true], ''),
});

const Checkout_1 = () => {

    const navigate = useNavigate();

    return (
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                address1: '',
                address2: '',
                city: '',
                state: '',
                country: '',
                zip: '',
                cardno: '',
                bzip: '',
                expmonth: '',
                expyear: '',
                cvc: '',
                terms: false,
            }}
            validationSchema={schema}
            onSubmit={async (input) => {

                const { firstName, lastName, email, address1, address2, city, state, country, zip, cardno, bzip, expmonth, expyear, cvc, terms } = input;

                axios.default.post(
                    `${BASE_URL}/Checkout`,
                    { firstName, lastName, email, address1, address2, city, state, country, zip, cardno, bzip, expmonth, expyear, cvc, terms }
                )
                    .then((value) => {   ///promise
                        console.log(value);
                        navigate('/thankyou');
                    })
                    .catch((error) => {
                        console.error("error", error);
                    })

                console.log(input)
            }
            }
        >
            {({
                handleSubmit,
                handleChange,
                handleBlur,
                values,
                touched,
                errors,
            }) => (

                <Form className={classes.form} noValidate onSubmit={handleSubmit} >
                    <AllHeader></AllHeader>

                    <h2 style=
                        {
                            {
                                fontFamily: "TimesNewRoman",
                                marginLeft: '-15em',
                                fontStyle: 'oblique',
                                marginTop: '2.1em'
                            }
                        }>Customer Info</h2>
                    <Form.Group className={classes.control} as={Col} md="4" controlId="validationFormik01">

                        <Form.Label>First Name</Form.Label>

                        <Form.Control
                            type="text"
                            name="firstName"
                            value={values.firstName}
                            onChange={handleChange}
                            placeholder="Enter your Good name"
                            isInvalid={!!errors.firstName}
                            isValid={touched.firstName && !errors.firstName}
                        />
                        <Form.Control.Feedback
                            style=
                            {
                                {
                                    fontSize: "20px",
                                    color: "red",
                                    fontFamily: "TimesNewRoman",
                                    marginLeft: '-9em',
                                }
                            }
                            type="invalid">{errors.firstName}</Form.Control.Feedback>

                    </Form.Group>

                    <Form.Group className={classes.control} as={Col} md="4" controlId="validationFormik02">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                            placeholder="Enter your Family name"
                            type="text"
                            name="lastName"
                            value={values.lastName}
                            onChange={handleChange}
                            isInvalid={!!errors.lastName}
                            isValid={touched.lastName && !errors.lastName} />
                        <Form.Control.Feedback
                            style=
                            {
                                {
                                    fontSize: "20px",
                                    color: "red",
                                    fontFamily: "TimesNewRoman",
                                    marginLeft: '-9em',
                                }
                            } type="invalid">
                            {errors.lastName}
                        </Form.Control.Feedback>
                        {/* <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback> */}
                    </Form.Group>


                    <Form.Group className={classes.control} as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter your email"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            isInvalid={!!errors.email} />
                        <Form.Control.Feedback style=
                            {
                                {
                                    fontSize: "20px",
                                    color: "red",
                                    fontFamily: "TimesNewRoman",
                                    marginLeft: '-9em',
                                }
                            }
                            type="invalid">{errors.email}</Form.Control.Feedback>
                    </Form.Group>


                    <Form.Group className={classes.control} controlId="formGridAddress1">
                        <Form.Label>Address 1</Form.Label>
                        <Form.Control
                            type="address"
                            name="address1"
                            value={values.address1}
                            onChange={handleChange}
                            isInvalid={!!errors.address1}
                            placeholder="Eg: 1234 Main St" />
                        <Form.Control.Feedback style=
                            {
                                {
                                    fontSize: "20px",
                                    color: "red",
                                    fontFamily: "TimesNewRoman",
                                    marginLeft: '-9em',
                                }
                            }
                            type="invalid">{errors.address1}</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className={classes.control} controlId="formGridAddress2">
                        <Form.Label>Address 2</Form.Label>
                        <Form.Control
                            type="address"
                            name="address2"
                            value={values.address2}
                            onChange={handleChange}
                            isInvalid={!!errors.address2}
                            placeholder="Apartment, studio, or floor" />
                        <Form.Control.Feedback style=
                            {
                                {
                                    fontSize: "20px",
                                    color: "red",
                                    fontFamily: "TimesNewRoman",
                                    marginLeft: '-9em',
                                }
                            }
                            type="invalid">{errors.address2}</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className={classes.control} as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter your City"
                            name="city"
                            value={values.city}
                            onChange={handleChange}
                            isInvalid={!!errors.city} />
                        <Form.Control.Feedback style=
                            {
                                {
                                    fontSize: "20px",
                                    color: "red",
                                    fontFamily: "TimesNewRoman",
                                    marginLeft: '-9em',
                                }
                            }>{errors.city}</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className={classes.control} controlId="formGridState">
                        <Form.Label style={
                            {
                                fontSize: "24px",
                                marginLeft: '-16.5em',
                                fontFamily: "TimesNewRoman"
                            }
                        }>State</Form.Label>
                        <Form.Select
                            style={
                                {
                                    fontSize: "22px",

                                    fontFamily: "TimesNewRoman"
                                }
                            }
                            type="text"
                            name="state"
                            value={values.state}
                            onChange={handleChange}
                            isInvalid={!!errors.state}
                            defaultValue="Choose...">
                            <option>Choose...</option>
                            <option>Gujarat</option>
                            <option>Manipur</option>
                            <option>Goa</option>
                            <option>Maharashtra</option>
                            <option>Karnataka</option>
                            <option>Punjab</option>
                            <option>Madhya Pradesh</option>
                            <option>Tamil Nadu</option>
                            <option>Andhra Pradesh</option>
                        </Form.Select>

                        <Form.Control.Feedback style={
                            {
                                fontSize: "20px",
                                color: "red",
                                fontFamily: "TimesNewRoman",
                                marginLeft: '-9em',
                            }
                        } type="invalid">
                            {errors.state}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className={classes.control} controlId="formGridState">
                        <Form.Label
                            style={
                                {
                                    fontSize: "24px",
                                    marginLeft: '-17.5em',
                                    fontFamily: "TimesNewRoman"
                                }
                            }
                            className={classes.label}>Country</Form.Label>
                        <Form.Select
                            style={
                                {
                                    fontSize: "22px",

                                    fontFamily: "TimesNewRoman"
                                }
                            }
                            type="text"
                            name="country"
                            value={values.country}
                            onChange={handleChange}
                            isInvalid={!!errors.country}
                            defaultValue="Choose...">
                            <option>Choose...</option>
                            <option>India</option>
                            <option>US</option>
                            <option>Canada</option>
                            <option>Austria</option>
                            <option>New Zealand</option>
                            <option>Zimbabwe</option>
                            <option>Qatar</option>
                            <option>Norway</option>
                            <option>Russia</option>
                        </Form.Select>
                        <Form.Control.Feedback style=
                            {
                                {
                                    fontSize: "20px",
                                    color: "red",
                                    fontFamily: "TimesNewRoman",
                                    marginLeft: '-9em',
                                }
                            } type="invalid">{errors.country}</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className={classes.control} as={Col} controlId="formGridZip">
                        <Form.Label>Postal Code</Form.Label>
                        <Form.Control
                            type="number"
                            name="zip"
                            value={values.zip}
                            onChange={handleChange}
                            isInvalid={!!errors.zip} />
                        <Form.Control.Feedback style=
                            {
                                {
                                    fontSize: "20px",
                                    color: "red",
                                    fontFamily: "TimesNewRoman",
                                    marginLeft: '-9em',
                                }
                            } type="invalid">{errors.zip}</Form.Control.Feedback>
                    </Form.Group>


                    <h2 style=
                        {
                            {
                                fontFamily: "TimesNewRoman",
                                marginLeft: '-15em',
                                fontStyle: 'oblique',
                                marginTop: '2.1em'
                            }
                        } className={classes.heading}>Payment Info</h2>

                    <Form.Group className={classes.control} >
                        <Form.Label>Card Number </Form.Label>
                        <Form.Control className={classes.control}
                            type="number"
                            name="cardno"
                            value={values.cardno}
                            onChange={handleChange}
                            isInvalid={!!errors.cardno}
                            placeholder="0000111100001111" />
                        <Form.Control.Feedback style=
                            {
                                {
                                    fontSize: "20px",
                                    color: "red",
                                    fontFamily: "TimesNewRoman",
                                    marginLeft: '-9em',
                                }
                            } className={classes.invalid} type="invalid">{errors.cardno}</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className={classes.control}>
                        <Form.Label>Billing Zip Code</Form.Label>
                        <Form.Control
                            type="number"
                            name="bzip"
                            value={values.bzip}
                            onChange={handleChange}
                            isInvalid={!!errors.bzip}
                            placeholder="Enter Billing Zip Code" />
                        <Form.Control.Feedback style=
                            {
                                {
                                    fontSize: "20px",
                                    color: "red",
                                    fontFamily: "TimesNewRoman",
                                    marginLeft: '-9em',
                                }
                            } type="invalid">{errors.bzip}</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className={classes.control}>
                        <Form.Label style={
                            {
                                fontSize: "24px",
                                marginLeft: '-18.5em',
                                fontFamily: "TimesNewRoman"
                            }
                        }>Expiry Month</Form.Label>
                        <Form.Select
                            style={
                                {
                                    fontSize: "22px",

                                    fontFamily: "TimesNewRoman"
                                }
                            }
                            type="text"
                            name="expmonth"
                            value={values.expmonth}
                            onChange={handleChange}
                            isInvalid={!!errors.expmonth}
                            defaultValue="Choose...">
                            <option>Choose...</option>
                            <option>January</option>
                            <option>February</option>
                            <option>March</option>
                            <option>April</option>
                            <option>May</option>
                            <option>June</option>
                            <option>July</option>
                            <option>August</option>
                            <option>September</option>
                            <option>October</option>
                            <option>November</option>
                            <option>December</option>
                        </Form.Select>
                        <Form.Control.Feedback style=
                            {
                                {
                                    fontSize: "20px",
                                    color: "red",
                                    fontFamily: "TimesNewRoman",
                                    marginLeft: '-9em',
                                }
                            } type="invalid">{errors.expmonth}</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className={classes.control}>
                        <Form.Label>Expiry Year</Form.Label>
                        <Form.Control
                            type="number"
                            name="expyear"
                            value={values.expyear}
                            onChange={handleChange}
                            isInvalid={!!errors.expyear}
                            placeholder="Enter your card expiry year" />
                        <Form.Control.Feedback style=
                            {
                                {
                                    fontSize: "20px",
                                    color: "red",
                                    fontFamily: "TimesNewRoman",
                                    marginLeft: '-9em',
                                }
                            } type="invalid">{errors.expyear}</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className={classes.control}>
                        <Form.Label>CVC</Form.Label>
                        <Form.Control
                            type="number"
                            name="cvc"
                            value={values.cvc}
                            onChange={handleChange}
                            isInvalid={!!errors.cvc}
                            placeholder="Enter 3 digit code printed on the back of your card" />
                        <Form.Control.Feedback style=
                            {
                                {
                                    fontSize: "20px",
                                    color: "red",
                                    fontFamily: "TimesNewRoman",
                                    marginLeft: '-9em',
                                }
                            } type="invalid">{errors.cvc}</Form.Control.Feedback>
                    </Form.Group>


                    <Form.Group
                        id="formGridCheckbox">
                        <Form.Check
                            style=
                            {
                                {
                                    fontSize: "25px",
                                    color: "black",
                                    fontStyle: 'bold',
                                    fontFamily: "TimesNewRoman",
                                    marginLeft: '-17em',
                                }
                            }
                            required
                            name="terms"
                            label="Agree to terms and conditions"
                            onChange={handleChange}
                            isInvalid={!!errors.terms}
                            feedback={errors.terms}
                            feedbackType="invalid"
                            id="validationFormik0" />
                    </Form.Group >
                    <div className={classes.actions}>
                        <Button className={classes.submit} variant="primary" type="submit">
                            Submit Form
                        </Button>
                    </div>
                </Form>
            )}
        </Formik>

    );
}

export default Checkout_1;