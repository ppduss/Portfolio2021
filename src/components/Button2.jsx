import React from 'react';
import styled from 'styled-components';
import Theme from '../Theme';
import media from '../media';

const RecentButton = styled.button`
  margin: 0 5px;
  padding: 10px 15px;
  text-align: center;
  align-self: right;
  color: ${({ theme: { colors } }) => colors.black};
  background-color: ${({ theme: { colors } }) => colors.white};
  border: none;
  font-size: 0.8rem;
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
      <RecentButton onClick={() => window.open(goto, '_blank')}>{children}</RecentButton>
  )
};

export default Button;
