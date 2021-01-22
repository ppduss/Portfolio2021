import React from 'react';
import styled from 'styled-components';
import Theme from '../Theme';
import media from '../media';

const StyledButton = styled.button`
  margin: 16px 10px 0px 0px;
  padding: 10px 15px;
  text-align: center;
  align-self: right;
  color: ${({ theme: { colors } }) => colors.white};
  background-color: ${({ theme: { colors } }) => colors.twilight};
  font-size: 0.8rem;
  border: none;
  border-radius: 3px;
  text-transform: uppercase;
  outline: none;
  box-shadow: none;
  &:focus {
  }
  &:visited {
    border-color: grey;
  }
   &:hover {
    background-color: ${({ theme: { colors } }) => colors.shadyblue};
    cursor: pointer;
  }
  &:active {
    border: 1px solid grey;
    outline: none;
  }
  ${media.xl`

`}
`;

const Button = ({ goto, children }) => {
  return (
      <StyledButton onClick={() => window.open(goto, '_blank')}>{children}</StyledButton>
  )
};

export default Button;
