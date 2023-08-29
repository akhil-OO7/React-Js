import React, { useEffect, useState } from "react";
import axios from "axios";
import Item from "./Item";
const Product = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((err) => alert(err));
  }, []);
  return (
    <div className="d-flex justify-content-center flex-column align-items-center m-2">
      <h1>Select your Products</h1>
      <div className="d-flex justify-content-center flex-wrap align-items-center">
        {products.map((product) => (
          <Item
            thumbnail={product.thumbnail}
            title={product.title}
            price={product.price}
            rating={product.rating}
            description={product.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Product;
