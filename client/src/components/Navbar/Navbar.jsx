import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../actions/userAction";
import { filtreProducts } from "../../actions/productAction";
import { useToasts } from "react-toast-notifications";
import "./Navbar.css";

function Navbar() {
  const cartreducer = useSelector((state) => state.cartReducer);
  const { cartItems } = cartreducer;
  const [searchkey, setsearchkey] = useState("");
  const [category, setcategory] = useState("all");

  const { addToast } = useToasts();

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(filtreProducts(searchkey, category));
  }, [searchkey]);

  const filterByCategoryName = (e) => {
    addToast("Your category is shown ! drop down to see ", {
      appearance: "success",
    });
    dispatch(filtreProducts(searchkey, e.target.innerHTML));
  };

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="/">
          SNOOPYSHOP
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="/">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/about">
                About us
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Categories
              </a>
              <div
                class="dropdown-menu"
                aria-labelledby="navbarDropdown"
                style={{ cursor: "pointer" }}
              >
                <a class="dropdown-item" onClick={filterByCategoryName}>
                  Mobiles
                </a>
                <a class="dropdown-item" onClick={filterByCategoryName}>
                  Laptops
                </a>
                <a class="dropdown-item" onClick={filterByCategoryName}>
                  Accessories
                </a>
                <a class="dropdown-item" onClick={filterByCategoryName}>
                  Fashion
                </a>
                <a class="dropdown-item" onClick={filterByCategoryName}>
                  Games
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" onClick={filterByCategoryName}>
                  All Categories
                </a>
              </div>
            </li>
            <li class="nav-item">
              <a className="nav-link" href="/cart">
                Cart : {cartItems.length}{" "}
                <i class="fas fa-shopping-cart" style={{ color: "black" }}></i>
              </a>{" "}
            </li>

            {currentUser ? (
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {currentUser.username.toUpperCase()}
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="/orders">
                    Orders
                  </a>
                  <div class="dropdown-divider"></div>
                  <li
                    className="dropdown-item"
                    onClick={() => {
                      dispatch(logoutUser());
                    }}
                  >
                    Logout
                  </li>
                </div>
              </li>
            ) : (
              <li class="nav-item">
                <a class="nav-link" href="/login">
                  Login
                </a>
              </li>
            )}
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input
              class="form-control mr-sm-2"
              value={searchkey}
              onChange={(e) => {
                setsearchkey(e.target.value);
              }}
              type="text"
              placeholder="Search"
            />
            {/* <button
              class="btn btn-outline  my-2 my-sm-0"
              style={{ backgroundColor: "teal", color: "white" }}
              type="submit"
            >
              Search
            </button> */}
          </form>
        </div>
      </nav>
      <hr />
    </div>
  );
}

export default Navbar;
