import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Src_product from '../component/src_product/Src_product';
import ProductDisplay from '../component/ProductDisplay/ProductDisplay';

const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e)=> e.id === Number(productId));
  return (
    <Container>
        <Src_product product={product} />
        <ProductDisplay product={product}/>
    </Container>
  )
}

export default Product
