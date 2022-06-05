import React, { useState } from "react";
import { useDispatch } from "react-redux";

import MenuIcon from "@mui/icons-material/Menu";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import LaptopIcon from "@mui/icons-material/Laptop";
import GamesIcon from "@mui/icons-material/Games";
import SpokeIcon from "@mui/icons-material/Spoke";
import StarsIcon from "@mui/icons-material/Stars";

import { filtreProducts } from "../../actions/productAction";

const Category = () => {
  const dispatch = useDispatch();

  const [category, setcategory] = useState("all");
  const [searchkey, setsearchkey] = useState("");

  const filterByCategoryName = (e) => {
    dispatch(filtreProducts(searchkey, e.target.innerHTML));
  };

  return (
    <div className="divCat"
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        backgroundColor: "#3966BF",
        margin: "auto auto",
        color: "white",
        padding: "10px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          border: "3px solid trasparent",
          height: "37px",
          width: "7%",
          cursor: "pointer",
        }}
      >
        <MenuIcon />
        <h6 style={{ marginTop: "6px" }} onClick={filterByCategoryName}>
          All
        </h6>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          border: "3px solid trasparent",
          height: "37px",
          width: "7%",
          cursor: "pointer",
        }}
      >
        <SmartphoneIcon />
        <h6
          style={{ marginTop: "6px" }}
          value="mobiles"
          onClick={filterByCategoryName}
        >
          Mobiles
        </h6>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          border: "3px solid trasparent",
          height: "37px",
          width: "7%",
          cursor: "pointer",
        }}
        value="laptops"
      >
        <LaptopIcon />
        <h6 style={{ marginTop: "6px" }} onClick={filterByCategoryName}>
          Laptops
        </h6>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          border: "3px solid trasparent",
          height: "37px",
          width: "7%",
          cursor: "pointer",
        }}
        value="accessories"
      >
        <SpokeIcon />
        <h6 style={{ marginTop: "6px" }} onClick={filterByCategoryName}>
          Accessories
        </h6>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          border: "3px solid trasparent",
          height: "37px",
          width: "7%",
          cursor: "pointer",
        }}
        value="fashion"
      >
        <StarsIcon />
        <h6 style={{ marginTop: "6px" }} onClick={filterByCategoryName}>
          Fashion
        </h6>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          border: "3px solid trasparent",
          height: "37px",
          width: "7%",
          cursor: "pointer",
        }}
      >
        <GamesIcon />
        <h6 style={{ marginTop: "6px" }} onClick={filterByCategoryName}>
          Games
        </h6>
      </div>
    </div>
  );
};

export default Category;
