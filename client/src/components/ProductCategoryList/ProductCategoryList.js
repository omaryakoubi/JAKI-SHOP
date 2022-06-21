import React, { useEffect, useState } from "react";
import Products from "../Product/Products";

import { useDispatch, useSelector } from "react-redux";

import { useParams } from "react-router-dom";

import Loader from "../Loader/Loader";

import { getAllProducts, filtreProducts } from "../../actions/productAction";
import Footer from "../Footer/Footer";
import Announcement from "../Annoucement/Annoucement";
import Navbar from "../Navbar/Navbar";

function ProductCategoryList() {
  const dispatch = useDispatch();
  const { category } = useParams();

  let { products, loading } = useSelector(
    (state) => state.getAllProductsReducer
  );

  useEffect(() => {
    dispatch(getAllProducts());

  }, [category]);

  const filtredproducts =
    products &&
    products.filter((product) => {
      return product.category.toLowerCase().includes(category.toLowerCase());
    });

   

  return (
    <div>
      <Announcement/>
      <Navbar/>
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      {loading ? (
        <Loader />
      ) : (
        filtredproducts.map((product) => {
          return (
            <div className="zoomoutcard col-md-3 mt-5 m-2 card p-2 shadow p-3 mb-5 bg-white rounded">
              <Products product={product} />
            </div>
          );
        })
      )}
    </div>
    <Footer/>
    </div>
  );
}

export default ProductCategoryList;
