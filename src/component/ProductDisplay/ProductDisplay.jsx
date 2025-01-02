import React, { useContext } from "react";
import "./ProductDisplay.css";
import { Container } from "react-bootstrap";
import star_icon from "../assets/Assets/star_icon.png";
import star_dull_icon from "../assets/Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";
const ProductDisplay = (props) => {
  const product = props.product;
  const { addToCart } = useContext(ShopContext);
  return (
    <Container>
      <div className="all">
        <div className="left">
          <div className="image_list">
            <img src={product.image} alt="" srcset="" />
            <img src={product.image} alt="" srcset="" />
            <img src={product.image} alt="" srcset="" />
            <img src={product.image} alt="" srcset="" />
          </div>
          <div className="image_show">
            <img src={product.image} alt="" srcset="" />
          </div>
        </div>
        <div className="right">
          <h1>{product.name}</h1>
          <div className="star">
            <img src={star_icon} alt="" srcset="" />
            <img src={star_icon} alt="" srcset="" />
            <img src={star_icon} alt="" srcset="" />
            <img src={star_icon} alt="" srcset="" />
            <img src={star_dull_icon} alt="" srcset="" />
            <p>(122)</p>
          </div>
          <div className="price">
            <div className="old_price">{product.old_price}$</div>
            <div className="new_price">{product.new_price}$</div>
          </div>
          <div className="descreption">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
              iste, ullam quam delectus deleniti accusantium sequi fuga quo
              ipsum amet, quod perspiciatis earum neque adipisci. Beatae
              voluptatum vitae soluta porro.
            </p>
          </div>
          <div className="size">
            <h4>Select Size</h4>
            <div className="all_size">
              <p>S</p>
              <p>M</p>
              <p>L</p>
              <p>XL</p>
              <p>XXL</p>
            </div>
          </div>
          <button
            onClick={() => {
              addToCart(product.id);
            }}
          >
     
            ADD TO CART
          </button>
          <div className="all_data">
            <p>
              Category: <span>{product.category}</span>
            </p>
            <p>Tags: Modern, Latest</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductDisplay;
