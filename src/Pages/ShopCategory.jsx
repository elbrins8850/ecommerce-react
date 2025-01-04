import React, { useContext } from 'react'
import './Style/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../component/assets/Assets/dropdown_icon.png'
import { Container, Row } from 'react-bootstrap'
import Item from '../component/Item/Item'
const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext);
  return (
    <div className='ShopCategory' >
      <img src={props.banner} alt='lgo' className='img'/>
      <Container>
      <Row>
      <div className="content-short">
      <p>
        <span>Showing 1-12</span> out of 36 products
      </p>
      <div className="right">
         Story by <img src={dropdown_icon}  alt=''/>
      </div>
      </div> 
      <div className="CategoryProduct">
        {all_product.map((item,i)=>{
          if(props.category === item.category){
            return(
              <Item key={i}  id={item.id} name={item.name} iamge={item.image} new_price={item.new_price} old_price={item.old_price}/>          

            )
          }else{
            return null
          }
        })}
      </div>
      </Row>
      
      </Container>
    </div>
  )
}

export default ShopCategory
