import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const MobileInfo = () => {
  const { phoneObject } = useSelector((store) => store.phone);
  const navigate = useNavigate();
  const handerBack = () => {
    navigate("/");
  };

  return (
    <StyledContainer>
      <StyledSection key={phoneObject.id}>
        <img src={phoneObject.img} alt={phoneObject.name} />
        <div>
          <h3>{phoneObject.name}</h3>
          <b>{phoneObject.description}</b>
          <i>{phoneObject.title}</i>
          <h2>{phoneObject.price}$ </h2>

          <button onClick={handerBack}>Назад</button>
        </div>
      </StyledSection>
    </StyledContainer>
  );
};

export default MobileInfo;

const StyledContainer = styled.li`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  height: 75vh;
`;

const StyledSection = styled.section`
  display: flex;
  border: 2px solid #333;
  padding: 20px;
  border-radius: 10px;
  height: 400px;
  width: 600px;
  gap: 20px;

  & > img {
    width: 310px;
    height: 350px;
    object-fit: contain;
  }
  & > div {
    display: flex;
    flex-direction: column;
    gap: 15px;
    justify-content: center;
    align-items: center;
  }
  & > div > button {
    width: 100%;
    background-color: #333;
    color: #fff;
    padding: 10px;
    font-weight: bold;
    font-size: 18px;
    cursor: pointer;
    border-radius: 6px;
    width: 200px;
    height: 60px;
    &:hover {
      background-color: #fff;
      color: #333;
      transition: all 0.3ms ease-in;
    }
    &:disabled {
      background-color: gray;
      cursor: not-allowed;
    }
  }
`;
