import React, { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "../redux/actions/productActions";
import ProductItem from "../components/ProductItem";

const ProductListing = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

  //function to fetch products
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products/")
      .catch((err) => {
        console.log("Err", err);
      });

    dispatch(setProducts(response.data));
  };

  //use effect hook
  useEffect(() => {
    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container p-3">
      <div className="row">
        {Object.keys(products).length > 0 ? (
          products.map((product) => {
            return <ProductItem product={product} key={product.id} />;
          })
        ) : (
          <> Fetching products...</>
        )}
      </div>
    </div>
  );
};

export default ProductListing;
