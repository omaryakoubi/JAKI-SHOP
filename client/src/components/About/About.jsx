import React from "react";
import { NavLink } from "react-router-dom";
import Announcement from "../Annoucement/Annoucement";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const About = () => {
  return (
  <div>
    <Announcement/>
        <Navbar/>
        <div className="container py-5 my-5">
          <div className="row">
            <div className="col-md-6">
              <h1 className="text-primary fw-bold mb-4"> About Us</h1>
              <p className="lead mb-4">
              We believe that technology has the potential to transform everyday life in Africa, for the better. 
              We built My Shop Application to help consumers access millions of goods and services conveniently and at 
              the best prices while opening up a new way for sellers to reach consumers and grow their businesses.
              </p>
              <NavLink to="/contact" className="btn btn-outline-primary px-3"> Contact Us </NavLink>
            </div>
            <div className="col-md-6 d-flex justify-content-center">
          <img src="\images\12.jpg" height="400px" width="400px" />
            </div>
            </div>
          </div>
        
        <footer>
          <Footer />
        </footer>
  </div>)
};

export default About;
