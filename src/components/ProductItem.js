import React from "react";
import { Link } from "react-router-dom";

const ProductItem = ({ product }) => {
  const { id, image, title, category, price } = product;
  return (
    <div className="col-md-4 col-lg-4 col-sm-12 mb-4">
      <Link to={`/product/${id}`} className="text-decoration-none text-dark">
        <div className="card card-default">
          <div className="card-body">
            <img
              src={image}
              alt={title}
              style={{ height: "300px", objectFit: "contain", width: "100%" }}
            />
          </div>
          <div className="card-header">
            <h6 style={{ overflow: "hidden", whiteSpace: "nowrap" }}>
              {title}
            </h6>
            <p>$ {price}</p>
            <p className="badge badge-info">{category}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductItem;
