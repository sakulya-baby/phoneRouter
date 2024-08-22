import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

export const Header = () => {
  return (
    <StyledHeader>
      <h1>
        <Link to={"/"}>Mobile</Link>
      </h1>
      <StyledDiv>
        <NavLink
          to="/profile"
          className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          <h3>Profile</h3>
        </NavLink>
        <br />
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          <h3>about</h3>
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          <h3>phones</h3>
        </NavLink>
      </StyledDiv>
    </StyledHeader>
  );
};

export default Header;
const StyledHeader = styled.header`
  width: 100%;
  height: 70px;
  border-bottom: 1px solid black;
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
  padding: 30px;
  align-items: center;
`;

const StyledDiv = styled.div`
  display: flex;
  gap: 10px;

  a.active {
    color: #1abd1a;
    border-radius: 5px;
    text-decoration: none;
  }
  a.inactive {
    text-decoration: none;
  }
`;
