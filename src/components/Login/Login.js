import React,{useState}from "react";
import './Login.css';
import classes from './Login.css';
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const Login=(props)=>{
const[email,setEmail]=useState("");
const [password, setPassword] = useState("");
const[error,setError]=useState();

const addUserHandler=(event)=>{
//const minLengthRegExp   = /.{8,}/;
//const minLengthPassword =   minLengthRegExp.test(password);
event.preventDefault();

if(email.trim.length===0 ||password.trim.length===0 )
{
    setError({
        title:"Invalid Input",
        message:"Please enter valid Email and Password(non-empty value)."
    })
    return;
}

if(password.length()<=6)
{
    setError({
        title:"Invalid Password",
        message:"Please enter valid Password(length >6)."
    })
    return;
}

console.log(email,password);
setEmail("");
setPassword('');
}

const emailChangeHandler=(event)=>
{
    setEmail(event.target.value);
}
const passwordChangeHandler=(event)=>
{
    setPassword(event.target.value);
}
const errorHandler=()=>
{
    setError(null);
}
  return(
    <div >
        {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
        <Card className={classes.input}>
        
            <form onSubmit={addUserHandler}>
                <h3 className="title">Welcome to INSTANT-GET</h3>
                <div className="input-container" placeholder="Email" >
                    <label>Email-Id </label>
                    <input type="text" name="mail"  value={email} onChange={emailChangeHandler}/>
                </div>
                <div className="input-container">
                    <label>Password </label>
                    <input type="password" name="pass" value={password} onChange={passwordChangeHandler}/>
                </div>
                <div className="button-container">
                    <Button type="submit" >Login</Button>
                </div>
            </form>
       
        </Card>
    </div>
        
    );
}
export default Login;