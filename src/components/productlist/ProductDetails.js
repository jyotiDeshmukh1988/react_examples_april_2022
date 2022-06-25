import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetails() {
  const { id } = useParams();

  const initialState = {
    images: [""],
    title: "",
    description: "",
    price: null,
  };
  const [prod, setProd] = useState(initialState);

  useEffect(() => {
    fetchDetails();
  }, [id]);

  const fetchDetails = async () => {
    const response = await axios.get(`https://dummyjson.com/products/${id}`);
    setProd(response.data);
  };
  return (
    <>
      <h1 className="text-center">Product Details</h1>
      <div className="card col-sm-3">
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
        </div>
      </div>
    </>
  );
}
