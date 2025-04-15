import React from 'react';
import {Link} from "react-router-dom";
import "../css/Register.css"

const Register = () => {
    return (
        <div className="register">
            <h2>Create Account</h2>
            <form action="" >
                <div className="form-group">
                    <label htmlFor="first_name">Full Name</label>
                    <input type="text"  name="name" id="first_name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="text"  name="email" id="email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password"  name="password" id="password" required />

                </div>
                <div className="form-group">
                    <label htmlFor="password_confirmation">Confirm Password</label>
                    <input type="password"  name="password_confirmation" id="password_confirmation" required />
                </div>

                <button type="submit" className="btn register-btn" >Register</button>

                <div className="login-redirect">
                    Already have an account? <Link to="/login"> Log in</Link>
                </div>

            </form>


        </div>
    );
};

export default Register;