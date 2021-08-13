import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filtreProducts } from "../../actions/productAction";
import "./Filtre.css";

function Filtre() {
  const [searchkey, setsearchkey] = useState("");
  const [category, setcategory] = useState("all");

  const dispatch = useDispatch();

  return (
    <div>
      <div className="row justify-content-center ">
        <div className="col-m-2 ">
          <input
            value={searchkey}
            onChange={(e) => {
              setsearchkey(e.target.value);
            }}
            type="text"
            placeholder="Search"
            className="sr form-control"
          />
        </div>
        <div className="ca col-m-2 ">
          <select
            className="form-control"
            value={category}
            onChange={(e) => {
              setcategory(e.target.value);
            }}
          >
            <option value="all">All</option>
            <option value="mobiles">Mobiles</option>
            <option value="laptops">Laptops</option>
            <option value="accessories">Accessories</option>
            <option value="fashion">Fashion</option>
            <option value="games">Games</option>
          </select>
        </div>

        <div className="col-m-2 ml-5">
          <button className="but btn-dark" onClick={()=>{dispatch(filtreProducts(searchkey , category))}}>FILTER</button>
        </div>
      </div>
    </div>
  );
}

export default Filtre;
