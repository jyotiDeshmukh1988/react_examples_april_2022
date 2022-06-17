import React, { useState } from "react";
import axios from "axios";

export default function AjaxDemo2() {
  const [products, setProducts] = useState([]);

  const fetchData = () => {
    axios.get("https://dummyjson.com/products").then((response) => {
      console.log(response.data.products);
      setProducts(response.data.products);
    });
  };
  return (
    <>
      <button onClick={fetchData}>Fetch data</button>
      <div>AjaxDemo2</div>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Description</th>
            <th>Price</th>
            <th>Rating</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
          {products.map((prod) => (
            <tr key={prod.id}>
              <td>{prod.title}</td>
              <td>{prod.description}</td>
              <td>{prod.price}</td>
              <td>{prod.rating}</td>
              <td>{prod.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
