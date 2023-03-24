import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./Login.css";
import Card from "../UI/Card";
import classes from '../UI/Button.module.css';
//import image from '../../Images/b5.jpg';
//import logo from 'logo_shopping.jpg';
import './Home.css';


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
    const initialValues = {
        username: "", email: "", password: "",
    }
    const formik = useFormik({
        initialValues, validationSchema,
        onSubmit: async (input) => {
            try {
                console.log(input)
            }
            catch (error) {
                console.log(error)
            }
        }
    }
    )
    //const URL ="https://1drv.ms/f/s!ApT255WjZx3jiJ9JaRYHlxYiKQjlNw?e=5znZd4";
    const imgMyimageexample = require('./b5.jpg');
    const divStyle = {
        width: "100vw",
        height: '100vh',
        backgroundImage: `url(${imgMyimageexample})`,
        backgroundSize: 'cover',
        marginTop: '-70px',
    };
    return (
        <div style={divStyle}>

            <Card>

                {/* <div className="img">
                    <img src="Images/logo_shopping.jpg" /> 
            </div>  */}
                <div className="title">
                    Welcome to Instant-Get
                </div>


                <form className="input-container"
                    style={
                        {
                            display: "flex",
                            flexDirection: "column",
                            maxWidth: "350px",
                            margin: "auto",
                            marginTop: "70px",

                        }
                    }

                    onSubmit={formik.handleSubmit}>

                    <input

                        value={formik.values.username}
                        name="username"
                        id="username"
                        onChange={formik.handleChange}
                        placeholder="Username"
                    />
                    {formik.errors.username}

                    <input
                        value={formik.values.email}
                        name="email"
                        id="email"
                        onChange={formik.handleChange}
                        placeholder="Email"
                    />
                    {formik.errors.email}

                    <input
                        value={formik.values.password}
                        name="password"
                        id="password"
                        type="password"
                        onChange={formik.handleChange}
                        placeholder="Password"
                    />
                    {formik.errors.password}

                    <button className={classes.button} type="submit">Sign-in</button>


                </form>
            </Card>
        </div>
    )
        ;
}
export default Home;