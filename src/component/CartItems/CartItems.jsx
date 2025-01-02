import React, { useContext } from "react";
import "./CartItems.css";
import { Container } from "react-bootstrap";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../assets/Assets/cart_cross_icon.png";
const CartItems = () => {
  const {
      all_product,
      cartItems,
      addToCart,
      removeFromCart,
      getTotalItemId
  } = useContext(ShopContext);
  return (
    <Container>
      <div className="all">
        <div className="cart_main">
          <p>Product</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
      </div>
      <hr className="line" />
      {all_product.map((e, index) => {
        if (cartItems[e.id] > 0) {
          return (
            <div className="Section_tow">
              <div className="cart_item">
                <img src={e.image} alt="" srcset="" className="image_product" />
                <p className="title">{e.name}</p>
                <p>${e.new_price}</p>
                <button
                  onClick={() => {
                    addToCart(e.id);
                  }}
                  className="product_count"
                >
                  + {cartItems[e.id]}
                </button>
                <p>${e.new_price * cartItems[e.id]}</p>
                <img
                  src={remove_icon}
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                  alt=""
                  className="icon"
                  srcset=""
                />
              </div>
              <hr className="line" />
            </div>
          );
        } else {
          return null;
        }
      })}
      <div className="down">
        <div className="total">
          <h1>cart total</h1>
          <div>
            <div className="total_item">
              <p>Subtatal</p>
              <p>${getTotalItemId()}</p>
            </div>
            <hr className="line" />
            <div className="total_item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr className="line" />
            <div className="total_item">
              <p>Total</p>
              <p>${getTotalItemId()}</p>
            </div>
            <hr className="line" />
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="promo_code">
          <p>If you have a promo code, Enter it here</p>
          <div className="promo_box">
            <input type="text" placeholder="promo code" />
            <button type="submit">Submit</button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CartItems;
