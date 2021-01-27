import styled, { keyframes } from "styled-components";
import React from "react"
import media from '../../media';

const lineanim = keyframes`
  from {
    width: 0px;
    height: 0px;
  }
  to {
    height: 30px;
    width: 9vw;
  }
`;
const drop = keyframes`
  from {
    opacity: 0;
    width: 0px;
    height: 0px;
  }
  to {
    opacity: 1;
    height: 30px;
    width: 60px;
  }
`;

const IconContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 8vw;
  margin-top: 30px;
  ${media.lg`
    width: 18vw;
  `}
`;
const IconName = styled.p`
  top: 2px;
  left: 14vw;
  position: absolute;
  transition: all 200ms ease;
  opacity: 0;
  ${IconContainer}:hover & {
    /* animation: ${drop} 400ms cubic-bezier(.41,.99,.74,.95) forwards;
    animation-iteration-count: 1;
    animation-delay: 500ms; */
    /* display: block; */
    opacity: 1;
    transition: all 300ms ease 400ms;
  }

`;

const Icon = styled.img`
  width: 50px;
  position: absolute;
  ${media.lg`
    width: 65px;
  `}
`;
const SVGContainer = styled.div`
  margin-top: 70px;
`;

const SVGicon = styled.svg`
  top: 23px;
  left: 50%;
  width: 0px;
  height: 0px; 
  /* background-color: #ffffff; */
  position: absolute;
  ${IconContainer}:hover & {
    animation: ${lineanim} 400ms cubic-bezier(.41,.99,.74,.95) forwards;
    animation-iteration-count: 1;
    animation-delay: 300ms;
  }
`;
const Line = styled.line`
 stroke: black;
 stroke-width: 5;
`;

const Skill = ({ src, name }) => (
  <IconContainer>
    <Icon src={src} />
    <IconName>{name}</IconName>
    <SVGContainer>
      <SVGicon height="20" width="300">
        <Line x1="0" y1="0" x2="300" y2="0" />
          Sorry, your browser does not support inline SVG.
      </SVGicon>
    </SVGContainer>
  </IconContainer>
)

export default Skill