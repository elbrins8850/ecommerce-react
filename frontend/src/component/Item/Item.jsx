import React from "react";
import { Container, Row } from "react-bootstrap";
import "./item.css";
import { Link } from "react-router-dom";

const Item = (props) => {
  // المسار الصحيح للصور في public/assets/
  const imageBaseUrl = "/assets/";

  return (
    <div>
      <Container>
        <Row className="item">
          <Link to={`/product/${props.id}`}>
            <img 
              src={`${imageBaseUrl}${props.image}`} 
              alt={props.name}
              onError={(e) => {
                e.target.src = '/assets/placeholder.jpg'; // صورة بديلة
                console.log('Image not found:', props.image);
              }}
            />
          </Link>
          <p>{props.name}</p>
          <div className="item-price">
            <div className="item-price-new">${props.new_price}</div>
            <div className="item-price-old">${props.old_price}</div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Item;