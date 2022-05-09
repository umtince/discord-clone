import { Button } from '@mui/material';
import React from 'react';
import './Login.css';
import { auth, provider } from './firebase';

function Login() {
    const signIn = () =>{
        auth.signInWithPopup(provider).catch((error) => alert(error.message));
    }


  return (
    <div className="login">
          <form>
            <div className='login-form'>
                <div>
                    <div>
                      <label className='text'>Email</label>
                    </div>
                    <div>
                      <input type="text" className="inputLogin"></input>
                    </div>
                </div>

              <div>
                  <div>
                    <label className='text'>Password</label> 
                  </div>
                  <div>
                    <input className="inputLogin" type="password"></input>
                  </div>
              </div>

              <a href="#" className='dont-remember-password-text'>Don't remember your password?</a>
              
              <div className='login-button-container'>
                  <Button className="login-button-first">Log in</Button>
              </div>
              
              <div>
                  <span className='no-account-text'>Don't have an account?</span>
                  <a href="#" className='register-text'>Register</a>
              </div>
            </div>
        </form>

        <Button onClick={signIn}>Sign in with Google</Button>
    </div>
  )
}

export default Login;