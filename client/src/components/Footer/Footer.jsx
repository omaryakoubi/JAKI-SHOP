import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #ebebeb;
  display: flex;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  flex: 1;
`;

const Logo = styled.h1``;
const Desc = styled.div`
  margin: 30px 215px 30px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  display: flex;
  align-items: center;
  margin-right: 20px;
  justify-content: center;
  color: white;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  maring: 0;
  list-style: none;
  flex-direction: column;
  display: flex;
  padding: 0;
`;

const ListItem = styled.li`
  width: 100%;
  color: black;
  margin-bottom: 10px;
  &:hover {
    color: teal;
  }
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  margin-left: 130px;
  align-items: center;
`;

const Payment = styled.img`
  width: 50%;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

function Footer() {
  return (
    <div>
      <hr/>
    <Container>

      <Left>
        <Logo>SNOOPY SHOP</Logo>
        <Desc>
          {" "}
          is an online ecommerce platform. <br /> We have the best prices in
          market.
        </Desc>
        <SocialContainer>
          <SocialIcon color="#385999">
            <a
              style={{ color: "white" }}
              href="https://www.facebook.com/salhi.asma.526"
            >
              <i className="fab fa-facebook-f" />
            </a>
          </SocialIcon>
          <SocialIcon color="#E4405F">
            <a
              style={{ color: "white" }}
              href="https://www.instagram.com/hasnichayma/"
            >
              <i className="fab fa-instagram" />
            </a>
          </SocialIcon>
          <SocialIcon color="black">
            <a style={{ color: "white" }} href="https://github.com/chaymahasni">
              <i className="fab fa-github" />
            </a>
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <a href="/" style={{ textDecoration: "none" }}>
            {" "}
            <ListItem>Home</ListItem>
          </a>
          <a href="/register" style={{ textDecoration: "none" }}>
            {" "}
            <ListItem>Register</ListItem>
          </a>
          <a href="/cart" style={{ textDecoration: "none" }}>
            {" "}
            <ListItem>Cart</ListItem>
          </a>
          <a href="/ordes" style={{ textDecoration: "none" }}>
            {" "}
            <ListItem>Orders</ListItem>
          </a>
          <a href="/about" style={{ textDecoration: "none" }}>
            {" "}
            <ListItem>About us</ListItem>
          </a>
        </List>
      </Center>

      <Right>
        <Title>Contact</Title>

        <ContactItem>
          <i class="fa fa-phone"></i> +216 99 999 999
        </ContactItem>

        <ContactItem>
          <i class="fa fa-envelope"></i>snoopyshop@gmail.com
        </ContactItem>
        {/* <ContactItem>
          <i class="fa-solid fa-location-pin"></i>622 Beja Nord, Beja
        </ContactItem> */}

        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container></div>
  );
}

export default Footer;
