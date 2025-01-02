import React from 'react'
import './Collections.css'
import new_collection from '../assets/Assets/new_collections'
import Item from '../Item/Item'
import { Container } from 'react-bootstrap'
const Collections = () => {
  return (
<Container className='collection'>
      <h1>NEW COLLECTIONS </h1>
        <hr/>
      <div className="popular-item">
        {new_collection.map((item,i)=>{
            return <Item key={i}  id={item.id} name={item.name} iamge={item.image} new_price={item.new_price} old_price={item.old_price}/>          
        })};
      </div>
    </Container>
  )
}

export default Collections
