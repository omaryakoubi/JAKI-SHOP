import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../actions/cartAction";
import { getProductById } from "../../actions/productAction";
import { useToasts } from "react-toast-notifications";
import Error from "../Error/Error";
import Loader from "../Loader/Loader";
import Review from "../Review/Review";
import "./ProductsDescription.css";

function ProductsDescription({ match }) {
  const { addToast } = useToasts();
  const productid = match.params.id;
  const dispatch = useDispatch();

  const [quantity, setquantity] = useState(1);

  const getproductbyidstate = useSelector(
    (state) => state.getProductByIdReducer
  );

  const { product, loading, error } = getproductbyidstate;

  function addtocart() {
    dispatch(addToCart(product, quantity));
    addToast("You product was added successfully", { appearance: "success" });
  }

  useEffect(() => {
    dispatch(getProductById(productid));
  }, []);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : error ? (
        <Error error="Something wrong!" />
      ) : (
        <div className="row  mt-2">
          <div className="col">
            <div className="card shadow p-3 mb-5 ml-5 bg-white rounded" style={{width:"50%"}}>
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
                  backgroundColor: "#BF382C",
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
    </div>
  );
}

export default ProductsDescription;
