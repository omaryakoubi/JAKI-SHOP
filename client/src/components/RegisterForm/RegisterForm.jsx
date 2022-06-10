import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerNewUser } from "../../actions/userAction";
import Error from "../Error/Error";
import Loader from "../Loader/Loader";
import Success from "../Success/Success";
import "./RegisterForm.css";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-size: cover;
  justify-content: center;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://static.pullandbear.net/2/static2/itxwebstandard/images/home/2022-05/06/Newin_man.jpg?v=20220511220605")
      center;
`;

const Wrapper = styled.div`
  padding: 20px;
  background-color: white;
  width: 40%;
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;
const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

function RegisterForm() {
  const registerstate = useSelector((state) => state.registerNewUserReducer);
  const { loading, error, success } = registerstate;
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");

  const dispatch = useDispatch();

  const register = (e) => {
    e.preventDefault();
    const user = {
      username: username,
      email: email,
      password: password,
    };
    if (password == cpassword) {
      dispatch(registerNewUser(user));
    } else {
      alert("Please confirm your Password!");
    }
  };

  return (
    <div className="registerform">
      <Container>
        <Wrapper>
          <Title>SIGN UP</Title>
          {loading && <Loader />}
          {error && <Error error="Email Already Exist!" />}
          {success && <Success success="You are successfully Registred!" />}
          <Form onSubmit={register}>
            <Input
              placeholder="username"
              value={username}
              required
              onChange={(e) => {
                setusername(e.target.value);
              }}
            />
            <Input
              placeholder="email"
              type="email"
              value={email}
              required
              onChange={(e) => {
                setemail(e.target.value);
              }}
            />
            <Input
              placeholder="password"
              value={password}
              type="password"
              required
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            />
            <Input
              placeholder="confirm password"
              value={cpassword}
              type="password"
              required
              onChange={(e) => {
                setcpassword(e.target.value);
              }}
            />

            <Agreement>
              By creating an account, I consent to the processing of my
              personnal data in accordance with the
              <br></br> <b>PRIVACY POLICY</b>
            </Agreement>
            <Button type="submit">Create</Button>
            <a href="/login" style={{ color: "black" }}>
              <h5>Already Registred? Click here to Login!</h5>
            </a>
          </Form>
        </Wrapper>
      </Container>
    
      {/* <div className="frm">
      <div className="row justify-content-center">
        <div className="zoomoutcard col-md-5 card p-5 shadow p-3 mb-5 bg-white rounded">
          <div className="div">
            <h4 className="text-center" style={{ color: "#253C59" }}>
              REGISTER
            </h4>
            {loading && <Loader />}
            {error && <Error error="Email Already Exist!" />}
            {success && <Success success="You are successfully Registred!" />}

            <form onSubmit={register}>
              <input
                type="text"
                placeholder="Username..."
                className="form-control mb-20"
                required
                value={username}
                onChange={(e) => {
                  setusername(e.target.value);
                }}
              />
              <input
                type="email"
                placeholder="Email..."
                className="form-control mb-20"
                required
                value={email}
                onChange={(e) => {
                  setemail(e.target.value);
                }}
              />
              <input
                type="password"
                placeholder="Password..."
                className="form-control mb-20"
                required
                value={password}
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
              />
              <input
                type="password"
                placeholder="Confirm Password..."
                className="form-control"
                required
                value={cpassword}
                onChange={(e) => {
                  setcpassword(e.target.value);
                }}
              />
              <div className="bt mt-2">
                <button
                  type="submit"
                  className="btn"
                  style={{
                    color: "white",
                    backgroundColor: "teal",
                    width: "200px",
                  }}
                >
                  REGISTER NOW
                </button>
              </div>
            </form>
            <br />
            <a href="/login" style={{ color: "#253C59" }}>
              <h5>Already Registred? Click here to Login!</h5>
            </a>
          </div>
        </div>
      </div>
    </div> */}
    </div>
  );
}

export default RegisterForm;
