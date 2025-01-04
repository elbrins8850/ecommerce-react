import React from 'react'
import './Style/Login.css'
import { Container, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const LoginSignup = () => {
  return (
    <div className='background'>
      <Container>
        <div className='login'>
          <h1> Sign Up</h1>
        <Form>
          <input type='text' placeholder='Your Name' required/>
          <input type='email' placeholder='Email Address' required/>
          <input type='password' placeholder='Password' required/>
          <input type='password' placeholder='Rest Password' required/>
          <Link to={'/login'}>
          
          <button type='submit'>Continue</button>
          </Link>
        </Form>
        <div className="content">
          <p>Already have an account? 
            <Link to={'/login'}>
            <a href="#Login">Login here</a>
            </Link>
            
            </p>

          <input type='checkbox' /> 
          <p className='end'> By continuing, i agree to the termes of use & privacy policy</p>

   
          </div>

        </div>
      </Container>
    </div>
  )
}

export default LoginSignup
