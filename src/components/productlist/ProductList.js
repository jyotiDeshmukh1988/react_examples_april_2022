import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function ProductList() {
  const [products, setProducts] = useState([]);

  const fetchData = () => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
      });
  };
  return (
    <>
      <h1 className="text-center bg-primary">Product List</h1>
      <button onClick={fetchData}>Fetch Data</button>
      <hr />
      <div className="container">
        <div className="row">
          {products.map((prod) => (
            <div className="col-sm-3">
              <div className="card">
                <img
                  src={prod.images[0]}
                  className="card-img-top"
                  alt="image not available"
                  width="200"
                  height="200"
                />
                <div className="card-body">
                  <h5 className="card-title">{prod.title}</h5>
                  <p className="card-text">{prod.description}</p>
                  <p className="card-text">Price: {prod.price}</p>
                  <p className="card-text">Rating: {prod.rating}</p>
                  <p className="card-text">
                    <button className="btn btn-info">
                      <Link to={`/productdetails/${prod.id}`}> View Details</Link>
                    </button>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
