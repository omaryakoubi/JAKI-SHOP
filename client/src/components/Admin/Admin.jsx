import React, { useEffect } from "react";
import { Link, Switch, Route } from "react-router-dom";
import UsersList from "../UsersList/UsersList";
import ProductsList from "../ProductsList/ProductsList";
import AddNewProduct from "../AddNewProduct/AddNewProduct";
import OrdersList from "../OrdersList/OrdersList";
import "./Admin.css";
import EditProduct from "../EditProduct/EditProduct";
import { useHistory } from "react-router-dom";
import NavbarAdmin from "./NavbarAdmin/NavbarAdmin";
import FooterAdmin from "./FooterAdmin/FooterAdmin";
import HomeAdmin from "./HomeAdmin/HomeAdmin";
function Admin() {
  return (
    <div>
      <NavbarAdmin />

      <div className="row">
        <div className="col-md-10">
          <Switch>
            <Route exact path="/admin" component={HomeAdmin} />
            <Route path="/admin/userslist" component={UsersList} />
            <Route path="/admin/productslist" component={ProductsList} />
            <Route path="/admin/addnewproduct" component={AddNewProduct} />
            <Route path="/admin/orderslist" component={OrdersList} />
            <Route
              path="/admin/editproduct/:productid"
              component={EditProduct}
            />
          </Switch>
        </div>
      </div>
      <FooterAdmin />
    </div>
  );
}

export default Admin;
