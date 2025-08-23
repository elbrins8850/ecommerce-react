import React from 'react'
import './Src_product.css'
import { Container } from 'react-bootstrap'
const arrow_icon = 'assets/breadcrum_arrow.png'
const Src_product = (props) => {
    const product = props.product;
  return (
    <Container>
      <div className="src">
        <p>Home <img src={arrow_icon} alt="icon"/> Shop <img src={arrow_icon} alt="icon"/> {product.category} <img src={arrow_icon} alt="icon"/> {product.name} </p>
        <hr />
      </div>
    </Container>
  )
}

export default Src_product
