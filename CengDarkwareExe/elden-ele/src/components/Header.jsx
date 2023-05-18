import React from "react";
import styled from "styled-components";
import logo from "../assets/logo2.png";

export default function Header() {

  return (
    <StyledHeader className="flex a-center j-between">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>

    </StyledHeader>
  );
}
const StyledHeader = styled.header`
   padding: 0 4rem;
  .logo {
    img {
      height: 5rem;
      transition: transform 0.5s;
    }
    img:hover {
      transform: rotate(360deg);
    }
  } 
  button {
    padding: 0.5rem 1rem;
    background-color: #e6cc00;
    border: none;
    cursor: pointer;
    color: white;
    border-radius: 0.2rem;
    font-weight: bolder;
    font-size: 1.05rem;
  }
`;