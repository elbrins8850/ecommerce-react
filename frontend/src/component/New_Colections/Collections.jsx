import React from "react";
import Item from "../Item/Item";
import "./Collections.css";

const Collections = ({ products }) => {
  // أحدث 8 منتجات
  const newCollections = products.slice(0, 8);

  return (
    <div className="collections">
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections-item">
        {newCollections.map((item, i) => (
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

export default Collections;