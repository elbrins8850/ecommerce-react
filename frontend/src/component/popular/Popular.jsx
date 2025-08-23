import React from "react";
import Item from "../Item/Item";
import "./popular.css";

const Popular = ({ products }) => {
  // تصفية المنتجات الشعبية
  const popularProducts = products.filter(product => product.rating >= 4);

  return (
    <div className="popular">
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular-item">
        {popularProducts.map((item, i) => (
          <Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
};

export default Popular;