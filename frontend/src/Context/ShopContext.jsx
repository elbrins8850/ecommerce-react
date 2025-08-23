import React, { createContext, useState, useEffect } from "react";
import { useProducts } from '../component/assets/Assets/all_product';

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const { products: all_product, loading, error } = useProducts();
  const [cartItems, setCartItems] = useState({});

  // تهيئة عربة التسوق عندما تتوفر المنتجات
  useEffect(() => {
    if (all_product && all_product.length > 0) {
      const initialCart = {};
      all_product.forEach(product => {
        initialCart[product.id] = 0;
      });
      setCartItems(initialCart);
    }
  }, [all_product]);

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ 
      ...prev, 
      [itemId]: Math.max((prev[itemId] || 0) - 1, 0) 
    }));
  };

  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  };

  const getTotalItemAmount = () => {
    let totalAmount = 0;
    if (!all_product) return totalAmount;
    
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_product.find((product) => product.id === Number(item));
        if (itemInfo) {
          totalAmount += itemInfo.new_price * cartItems[item];
        }
      }
    }
    return totalAmount;
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const contextValue = {
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalItemAmount,
    getTotalCartItems
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;