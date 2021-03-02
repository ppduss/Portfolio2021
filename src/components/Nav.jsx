import styled, { keyframes, css } from "styled-components";
import React from "react";
import Button from "./Button";
import media from '../media';
import li from '../images/li-icn.svg'
import mail from '../images/mail-icn.svg'
import gh from '../images/gh-icn.svg'
// import qu from '../images/question-icn.svg'

const NavContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  width: 200px;
  height: 30px;
  margin: 0 auto;
  /* top: 75%; */
  ${media.md`
    position: absolute;
    top: 12%;
    right: 9.5%;
`}

`;

const NavLinks = styled.a`
  width: 30px;
`;
  
const SocialIcn = styled.img`
 height: 100%;
 transition: all 100ms linear;
 &:hover {
    filter: invert(100%);
  }
`;

const Nav = () => (
  <NavContainer>
    <NavLinks href="https://www.linkedin.com/in/patrickdussault" target="_blank"><SocialIcn src={li}></SocialIcn></NavLinks>
    <NavLinks href="https://github.com/ppduss" target="_blank"><SocialIcn src={gh}></SocialIcn></NavLinks>
    <NavLinks href="mailto:ppduss@gmail.com" target="_blank"><SocialIcn src={mail}></SocialIcn></NavLinks>
    {/* <NavLinks><SocialIcn src={qu}></SocialIcn></NavLinks> */}
  </NavContainer>
)

export default Nav;