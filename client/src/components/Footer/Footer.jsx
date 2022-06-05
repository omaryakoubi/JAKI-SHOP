import React from "react";
import styled from "styled-components";

export const Box = styled.div`
  padding: 80px 60px;
  background: #253c59;
  margin-top: 15%;
  bottom: 0;
  height: 400px;
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  grid-gap: 20px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;

  &:hover {
    color: #bf382c;
    transition: 200ms ease-in;
  }
`;

export const Heading = styled.p`
  font-size: 24px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;
`;

function Footer() {
  return (
    <Box>
      <Container>
        <Row>
          <Column>
            <Heading>About Us</Heading>
            {/* <img src='/logogif.gif' alt="logo" /> */}
            <h5
              style={{
                color: "white",
                fontFamily: "sans-serif",
              }}
            >
              SNOOPY SHOP is an online ecommerce platform. <br /> We have the
              best prices in market.
            </h5>
          </Column>
          <Column>
            <Heading>Services</Heading>
            <FooterLink href="/">Home</FooterLink>
            <FooterLink href="/cart">Cart</FooterLink>
            <FooterLink href="/orders">Orders</FooterLink>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="#">99 999 999</FooterLink>
            <FooterLink href="#">71 100 100</FooterLink>
            <FooterLink href="#">snoopyshop@gmail.com</FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="https://www.facebook.com/salhi.asma.526">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>Facebook</span>
              </i>
            </FooterLink>
            <FooterLink href="https://www.instagram.com/hasnichayma/">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>Instagram</span>
              </i>
            </FooterLink>
            <FooterLink href="https://github.com/chaymahasni">
              <i className="fab fa-github">
                <span style={{ marginLeft: "10px" }}>Github</span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
      <h1
        style={{
          color: "#BF382C",
          textAlign: "center",
          fontSize: "15px",
          marginTop: "25px",
        }}
      >
        © 2022 All rights are reserved
      </h1>
    </Box>
  );
}

export default Footer;
