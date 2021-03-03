import React from 'react';
import styled from 'styled-components';
import Theme from '../Theme';
import media from '../media';

const StyledButton = styled.button`
  /* width: 125px; */
  margin-right: 15px;
  padding: 8px 12px;
  text-align: center;
  color: ${({ theme: { colors } }) => colors.black};
  background-color: ${({ theme: { colors } }) => colors.white};
  border: 1px solid ${({ theme: { colors } }) => colors.black};
  font-size: 0.8rem;
  /* border: none; */
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
  ${media.sm`
  padding: 8px 20px;
`}
`;

const Button = ({ goto, children, style }) => {
  return (
      <StyledButton onClick={() => window.open(goto, '_blank')}>{children}</StyledButton>
  )
};

export default Button;
