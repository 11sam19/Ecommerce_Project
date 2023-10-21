import React from 'react';
import './styles/style.css';
import man from '../image/man.png'

const Login = () => {
    return (
        <>
        <div className="container">
        <Circle />
        <h1>ECOMMERCE WEBSITE</h1>
        <div className="login_container">
           <div className="row">
                <div className="col-6 d-flex justify-content-right">
                    <img src={man} alt="man_img"/>
                </div>
                <div className="col-6 ">
                   <h3>Admin Login</h3>
                   <div className="login_form">
                    <label>User Name: </label><br/>
                    <input type="text" name="username" placeholder='Enter your username...'/><br/>
                    <label>Password: </label><br/>
                    <input type="text" name="password" placeholder='Enter your password'></input>
                   </div> 
                </div>
           </div>
        </div>
        </div>
        </>
    );
}

export default Login;

const Circle = () => {
    return (
        <>
            <div className="circle_top_right "></div>
            <div className="circle_top_left "></div>
            <div className="circle_bottom_right "></div>
            <div className="circle_bottom_left "></div>

        </>
    )
}