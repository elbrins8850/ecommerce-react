import React from 'react'
import './NewLetters.css'
import { Button, Col, Container, Row } from 'react-bootstrap'
const NewsLetters = () => {
  return (
    <Container>
    <Row className='news'>
        <Col className='news_content'>
            <h1>Get Exclusive Offers On Your Email</h1>
            <p> Subscribe to our newletter and stay update</p>
            <div>
                <input type='email' placeholder='Your Email id'/>
                <Button><a href='#Subscribe'>Subscribe</a></Button>
            </div>
        </Col>
    </Row>
    </Container>
  )
}

export default NewsLetters
