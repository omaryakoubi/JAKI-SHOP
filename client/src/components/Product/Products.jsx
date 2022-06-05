import React from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

function Products({ product }) {
  return (
    <div>
      <div>
        <Link to={`product/${product._id}`}>
          <img src={product.imgurl} className="img-fluid" />
          <h1>{product.name}</h1>
          <ReactStars
            count={product.rating}
            size={28}
            color={"#BF382C"}
            char={"☆"}
            isHalf={true}
            readonly
          />
          <h1>
            Price: {product.price} {product.unit}
          </h1>
        </Link>
      </div>
    </div>
  );
}

export default Products;
