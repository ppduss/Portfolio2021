import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: rgb(250, 247, 241);
  font-size: 0.7rem;
  border: 1px solid black;
  border-radius: 3px;
  margin: 16px 10px 0px 0px;
  padding: 5px 10px;
  text-align: center;
  align-self: right;
  outline: none;
  box-shadow: none;
 &:focus {
    /* border: 2px solid red; */
  }
  &:visited {
    border-color: grey;
  }
   &:hover {
    background-color: white;
    cursor: pointer;
  }
  &:active {
    border: 1px solid grey;
    outline: none;
  }
  @media (min-width: 480px){
    /* font-size: 0.7rem; */
  }
  @media (min-width: 768px){
      font-size: 0.8rem;
      margin: 10px 8px 0px 0px;
  }
  @media (min-width: 992px){
  }
  @media (min-width: 1200px){
      font-size: 0.9rem;
  }
`;

const Button = ({ goto, children }) => {
  return (
      <StyledButton onClick={() => window.open(goto, '_blank')}>{children}</StyledButton>
  )
};

export default Button;
