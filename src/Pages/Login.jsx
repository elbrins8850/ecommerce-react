import React from 'react'
import './Style/Login.css'
import { Container, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='background'>
      <Container>
        <div className='login'>
          <h1> Login</h1>
        <Form>
          <input type='text' placeholder='Your Name'/>
          <input type='email' placeholder='Email Address'/>
          <input type='password' placeholder='Password'/>
          <Link to={'/'}>
          <button>Login</button>
          </Link>
        </Form>
        <div className="content">
          <input type='checkbox' /> 
          <p className='end'> By continuing, i agree to the termes of use & privacy policy</p>

   
          </div>

        </div>
      </Container>
    </div>
  )
}

export default Login
