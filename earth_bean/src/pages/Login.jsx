import React from 'react'
import './pagesCss/Login.css'
function Login() {
  return (
    <div className='login-container'>
        <h2>Login</h2>
        <form className='login-form'>
            <div className='form-group'>
                <label htmlFor='username'>Username</label>
                <input type='text' id='username' name='username' required />
            </div>
            <div className='form-group'>
                <label htmlFor='password'>Password</label>
                <input type='password' id='password' name='password' required />
             </div>
            <button type='submit' className='login-btn'>Login</button>
            <p className='register-link'> Don't have an account? <a href='/register'><strong>Register here</strong></a></p>
        </form>           
    </div>
  )
}

export default Login