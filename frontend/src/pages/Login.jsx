import React from 'react';
import {Link} from "react-router-dom";
import "../css/Login.css"

const Login = () => {
    return (
        <div className="login-container">
            <h2>Login Account</h2>
            <form action="">
                <div className="form-group">
                    <label htmlFor="login">Email</label>
                    <input type="text" name="email" id="email" required />

                </div>
                <div className="form-group">
                    <label htmlFor="login">Password</label>
                    <input type="password" name="password" id="password" required />

                </div>
                <button type="submit" className="btn login-btn "> Login </button>

                <div className="register-redirect">
                    Don't have a account <Link to="/register"> Register </Link>
                </div>



            </form>

        </div>
    );
};

export default Login;