import React, { useEffect, useState } from "react";

export default function AjaxDemo1() {
  const [products, setProducts] = useState([]);

  const fetchData = () => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProducts(data.products);
      });
  };
  return (
    <>
      <div>AjaxDemo1</div>
      <button onClick={fetchData}>Fetch Data</button>

      {products.map((prod) => (
        <div
          style={{
            border: "1px solid blue",
            margin: "5px",
            padding: "10px",
            width: "200px",
            display: "inline-block",
          }}
        >
          title:{prod.title} <br />
          price:{prod.price} <br />
        </div>
      ))}
    </>
  );
}
