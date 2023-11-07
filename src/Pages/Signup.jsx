import React from "react";
import styles from './signinSignup.module.css';
import { Link } from "react-router-dom";
const Signup = () =>{
    return(
        <div className={styles.main}>
            <div className={styles.container}>
                <h1>Delish - Cakes n' Chocolates</h1>
                <h4>Sign up</h4>
                <div>
                    <label>Email</label><br/>
                    <input type='email' name='username'/>
                </div>
                <div>
                    <label>Password</label><br/>
                    <input type='password' name='password'/>
                </div>

                <button id={styles.signin}>Sign up</button>

                <hr/>

                <div>Already have an account? <Link to='/signin'>Sign in</Link></div>

            </div>
        </div>
    )
}
export default Signup;