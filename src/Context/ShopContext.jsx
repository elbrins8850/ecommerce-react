import React, { createContext, useState } from "react";
import all_product from "../component/assets/Assets/all_product";

export const ShopContext = createContext(null);
const getDefaultCart = () => {
  let cart = {};
  for (let i = 0; i < all_product.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};
const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItems((pre) => ({ ...pre, [itemId]: pre[itemId] + 1 }));


  };
  const removeFromCart = (itemId) => {
    setCartItems((pre) => ({ ...pre, [itemId]: pre[itemId] - 1 }));
  };

  const getTotalCartItems = ()=>{
    let totalItem = 0;
    for(const item in cartItems)
    {
      if(cartItems[item] > 0)
      {
        totalItem += cartItems[item]
      }
    }
    return totalItem;
  }


  const getTotalItemId = ()=>{
    var totalAmount= 0;
    for(const item in cartItems)
    {
      if(cartItems[item]> 0)
      {
        let itemInfo = all_product.find((product)=>product.id===Number(item));
         totalAmount += itemInfo.new_price * cartItems[item]; 
      }
    }
    return totalAmount; 
  }  

  const ContextValue = {
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalItemId,
    getTotalCartItems
  };

  return (
    <ShopContext.Provider value={ContextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
