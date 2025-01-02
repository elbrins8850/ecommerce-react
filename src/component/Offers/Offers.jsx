import React from 'react'
import './Offers.css'
import { Button, Col, Container, Row } from 'react-bootstrap'
import exclusive_image from'../assets/Assets/exclusive_image.png'
const Offers = () => {
  return (
    <Container >
      <Row className='offers'>
        <Col  className='left'>
            <h1>Exclusive</h1>
            <h1>Offers For You</h1>
            <p>ONLY ON BEST SELERS PRODUCTS</p>
            <Button><a href='#'>Check Now</a></Button>
        </Col>
        <Col  className='right'>
            <img src={exclusive_image} alt='image'/>
        </Col>
      </Row>
    </Container>
  )
}

export default Offers
