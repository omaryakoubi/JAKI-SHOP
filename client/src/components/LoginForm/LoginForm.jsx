import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../actions/userAction";
import Error from "../Error/Error";
import Loader from "../Loader/Loader";
import "./LoginForm.css";

function LoginForm() {
  const loginreducer = useSelector((state) => state.loginReducer);
  const { loading, error } = loginreducer;
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const dispatch = useDispatch();

 

  const login = (e) => {
    e.preventDefault();
    const user = {
      email: email,
      password: password,
    };

    dispatch(loginUser(user));

  };

  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      window.location.href = "/";
    }
    
  }, []);

  return (
    <div className="frm">
      <div className="row justify-content-center">
        <div className="zoomoutcard col-md-4 card p-5 shadow p-3 mb-5 bg-white rounded">
          <div className="div">
            <h4 className="text-center ">LOGIN</h4>

            {error && <Error error="Invalid Login Informations!" />}
            {loading && <Loader />}

            <form onSubmit={login}>
              <input
                type="email"
                placeholder="Email..."
                className="form-control"
                required
                value={email}
                onChange={(e) => {
                  setemail(e.target.value);
                  
                }}
              />
              <input
                type="password"
                placeholder="Password..."
                className="form-control"
                required
                value={password}
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
              />
             

              <div className="bt mt-2">
                <button type="submit" className="btn">
                  Login
                </button>
              </div>
            </form>
            <br />
            <div>
              <a href="/register" >
                <h5>No account? Create one</h5>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
