/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import {
  setSelectedProduct,
  removeSelectedProduct,
} from "../redux/actions/productActions";

const ProductDetail = () => {
  const { productId } = useParams();
  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();

  //fetchProduct by id
  const fetchProductById = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.log("Err", err);
      });
    if (Object.keys(response.data).length)
      dispatch(setSelectedProduct(response.data));
  };

  useEffect(() => {
    if (productId && productId !== "") fetchProductById();
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);

  const { title, image, description, price, category } = product;
  return (
    <div className="container p-3">
      <div className="row">
        {Object.keys(product).length > 0 ? (
          <>
            <div className="col-md-8 col-lg-8 col-ms-12">
              <img src={image} alt={title} className="img-fluid" />
            </div>
            <div className="col-md-4 col-lg-4 col-ms-12">
              <h3>{title}</h3>
              <h5>${price}</h5>
              <p>{description}</p>
              <p className="badge badge-primary">{category}</p>
            </div>
          </>
        ) : (
          <>Fetching...</>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
