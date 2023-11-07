import React , {useRef} from 'react';
import styles from './signinSignup.module.css';
import { Link } from 'react-router-dom';
const Signin = ()=>{
    const email = useRef();
    const password = useRef();
    function sendData(){
        var data = {
            "email" : email.current.value,
            "password" : password.current.value
        }
        fetch('http://localhost:8080/signin/password', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          })
            .then((response) => response.json())
            .then((data) => {
              // Handle the server response here, e.g., show a success message or error message
              console.log(data);
            })
            .catch((error) => {
              console.error('Error:', error);
            });
    }
    return(
        <div className={styles.main}>
            <div className={styles.container}>
                <h1>Delish - Cakes n' Chocolates</h1>
                <h4>Sign in</h4>
                <div>
                    <label>Email</label><br/>
                    <input type='email' name='email' ref={email}/>
                </div>
                <div>
                    <label>Password</label><br/>
                    <input type='password' name='password' ref={password}/>
                </div>

                <button id={styles.signin} onClick={sendData}>Sign in</button>

                <hr/>

                <div>Don't have an account? <Link to='/signup'>Sign up</Link></div>

            </div>
        </div>
    )
}
export default Signin;