import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./Login.css";
import classes from '../UI/Button.module.css';
import './Home.css';
import HomeCardDesign from "../UI/HomeCardDesign";
import { Link, useNavigate } from "react-router-dom";
import logo from '../../../src/Images/app_logo1.jpg';
import * as axios from 'axios';
import { BASE_URL } from '../../contants';

//const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

const validationSchema = Yup.object(
    {
        username: Yup
            .string()
            .min(5, "Too Short!!")
            .max(20, "Too Long")
            .required("Username is essential"),
        email: Yup.string().email("Invalid Email").required("Email is essential"),
        password: Yup.string()
            .required('Password is essential')
            .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/, 'Password must contain min 5 characters, 1 uppercase letter, 1 lowercase letter & 1 numeric digit'),

    }

)

const Home = () => {
    const navigate= useNavigate();

    const initialValues = {
        username: "", email: "", password: "",
    }
    const formik = useFormik({
        initialValues, validationSchema,
        onSubmit: async (input) => {

            const { username, password } = input;

            axios.default.post(
                `${BASE_URL}/login`, 
                { username, password }
                )
                .then((value) => {   ///promise
                    console.log(value);
                    navigate('/HomePage');
                })
                .catch((error) => {
                    console.error("error", error);
                })
            
            console.log(input)
        }
    }
    )
    //const URL ="https://1drv.ms/f/s!ApT255WjZx3jiJ9JaRYHlxYiKQjlNw?e=5znZd4";
    const imgMyimageexample = require('./b5.jpg');
    const divStyle = {
        width: "99vw",
        height: '105vh',
        backgroundImage: `url(${imgMyimageexample})`,
        backgroundSize: 'cover',
        marginTop: '-70px',
        overflowY: 'hidden', /* Hide vertical scrollbar */
        overflowX: 'hidden',
    };

    // const handleClick = () => {
    //     {
    //        if (validationSchema) {
    //         window.location.href = "/HomePage"
    //        }
    // }
    // (validationSchema)?(window.location.href = "/HomePage")
    // (condition) ? (if true this component gets displayed) :(else this component gets displayed)
    return (
        <div style={divStyle}>

            <HomeCardDesign>
                <div >
                    <img src={logo} className='imglogo'></img>
                    
                    <h3 className="title">Welcome to Wishipping</h3>
                </div>


                <form className="input-container"
                    style={
                        {
                            display: "flex",
                            flexDirection: "column",
                            maxWidth: "350px",
                            margin: "auto",
                            marginTop: "40px",
                            fontSize: "20px",
                        }
                    }

                    onSubmit={formik.handleSubmit}>

                    <input

                        value={formik.values.username}
                        name="username"
                        id="username"
                        onChange={formik.handleChange}
                        placeholder="Username"
                        style={{ fontSize: "18px", }}
                    />
                    {formik.errors.username}

                    <input
                        value={formik.values.email}
                        name="email"
                        id="email"
                        onChange={formik.handleChange}
                        placeholder="Email"
                        style={{ fontSize: "18px", }}
                    />
                    {formik.errors.email}

                    <input
                        value={formik.values.password}
                        name="password"
                        id="password"
                        type="password"
                        onChange={formik.handleChange}
                        placeholder="Password"
                        style={{ fontSize: "18px", }}
                    />
                    {formik.errors.password}

                    <button
                        // onClick={handleClick}
                        className={classes.button} type="submit">Sign-in</button>

                </form>
            </HomeCardDesign>
        </div>
    );
}
export default Home;