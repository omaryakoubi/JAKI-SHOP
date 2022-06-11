import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function Navbar() {
  const cartreducer = useSelector((state) => state.cartReducer);

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark  bg-dark">
        <a class="navbar-brand" href="/admin">
          ADMIN DASHBOARD
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
              <a class="nav-link" href="/admin">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>

            <li class="nav-item">
              <a className="nav-link" href="/admin/userslist">
                Users
              </a>
            </li>
            <li class="nav-item">
              <a className="nav-link" href="/admin/orderslist">
                Orders
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
                Products
              </a>
              <div
                class="dropdown-menu"
                aria-labelledby="navbarDropdown"
                style={{ cursor: "pointer" }}
              >
                <a class="dropdown-item" href="/admin/productslist">
                  Product list
                </a>

                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="/admin/addnewproduct">
                  Add new product
                </a>
              </div>
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
                  <div class="dropdown-divider"></div>
                  <li className="dropdown-item" onClick={() => {}}>
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
          {/* <form class="form-inline my-2 my-lg-0">
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
            </button> </form> */}
        </div>
      </nav>
      <hr />
    </div>
  );
}

export default Navbar;
