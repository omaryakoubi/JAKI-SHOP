import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../actions/cartAction";
import { getProductById } from "../../actions/productAction";
import { useToasts } from "react-toast-notifications";
import Error from "../Error/Error";
import Loader from "../Loader/Loader";
import Review from "../Review/Review";
import "./ProductsDescription.css";
import Announcement from "../Annoucement/Annoucement";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import {useParams} from "react-router-dom"
import { getAllProducts } from "../../actions/productAction";

import axios from "axios"


function ProductsDescription() {
  const { addToast } = useToasts();
  const {id} = useParams()
  const dispatch = useDispatch();
  const [productList, setProductList] = useState([])
  const [product,setProduct] = useState({})
  const [quantity, setquantity] = useState(1);
  const [loading, setLoading] = useState(false)

  axios.get("/api/products/allproducts").then((res) => setProductList(res.data)).catch(err => console.log(err))



  function addtocart() {
    dispatch(addToCart(product, quantity));
    addToast("You product was added successfully", { appearance: "success" });
  }



  return (
    <div>
       <Announcement/>
        <Navbar/>
      {loading ? (
        <Loader />
      )  : (
        <div className="row  mt-2">
          <div className="col">
            <div
              className="card shadow p-3 mb-5 ml-5 bg-white rounded"
              style={{ width: "50%" }}
            >
              <h1>{product.name}</h1>
              <img src={product.imgurl} />
              <p>{product.description}</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="m-2">
              <h1>
                Price : {product.price} {product.unit}{" "}
              </h1>
              <hr />
              <h1>
                Select Quantity :{" "}
                <select
                  value={quantity}
                  onChange={(e) => {
                    setquantity(e.target.value);
                  }}
                >
                  {" "}
                  {[...Array(product.countInStock).keys()].map((x, i) => {
                    return <option value={i + 1}>{i + 1}</option>;
                  })}
                </select>
              </h1>
              <hr />
              <button
                className="btn"
                style={{
                  color: "white",
                  backgroundColor: "teal",
                  width: "200px",
                }}
                onClick={addtocart}
              >
                ADD TO CART
              </button>
            </div>
            <hr />
            <Review product={product} />
          </div>
        </div>
      )}
       <footer>
          <Footer />
        </footer>
    </div>
  );
}

export default ProductsDescription;
