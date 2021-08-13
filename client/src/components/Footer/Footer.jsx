import React from "react";

function Footer() {
  return (
    <div>
       <div>
        <div class="container pt-4">
          <section class="mb-4">
            <a
              className=" btn-link btn-floating btn-lg text-dark m-1"
              href="https://www.facebook.com/hamza.touko" target="_blank"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i class="fab fa-facebook-f"></i>
            </a>

            <a
              className="btn-link btn-floating btn-lg text-dark m-1" target="_blank"
              href="https://www.instagram.com/hamza_toko/"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-instagram"></i>
            </a>

            <a
              className=" btn-link btn-floating btn-lg text-dark m-1"
              href="https://www.linkedin.com/in/hamza-toukabri-63b2a417a/" target="_blank"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              className=" btn-link btn-floating btn-lg text-dark m-1"
              href="https://github.com/HTOKO94?tab=repositories" target="_blank"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-github"></i>
            </a>
          </section>
        </div>

        <div
          className="text-center text-dark p-3"
      
        >
          © 2021 Copyright GETBESTSHOP Created By
          <a
            className="text-dark ml-2"
            href="https://www.linkedin.com/in/hamza-toukabri-63b2a417a/" target="_blank"
          >
              Hamza Toukabri  
          </a>
        </div>
        </div>
    </div>
  );
}

export default Footer;
