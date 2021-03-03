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
    width: 7.5vw;
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
  ${media.xs`
    width: 8vw;
  `}
  ${media.lg`
    width: 18vw;
  `}
`;
const IconName = styled.p`
  font-size: 0.8rem;
  position: absolute;
  transition: all 200ms ease;
  opacity: 0;
  display: none;
  margin-top: 60px;
  ${IconContainer}:hover & {
    opacity: 1;
    transition: all 300ms ease 400ms;
  };
  ${media.sm`
    display: block;
  `} 
  ${media.lg`
  margin-top: 0;
  position: absolute;
  top: 2px;
  left: 12vw;
  `} 
  ${media.xl`
  font-size: 1rem;
  left: 12vw;
  `} 
`;

const Icon = styled.img`
  width: 50px;
  position: absolute;
  ${media.xl`
    width: 60px;
  `}
`;
const SVGContainer = styled.div`
  margin-top: 75px;
  opacity: 0;
  ${media.lg`
    opacity: 1;
  `}
`;

const SVGicon = styled.svg`
  top: 23px;
  left: 10.5vw;
  width: 0px;
  height: 0px; 
  position: absolute;
  ${IconContainer}:hover & {
    animation: ${lineanim} 400ms cubic-bezier(.41,.99,.74,.95) forwards;
    animation-iteration-count: 1;
    animation-delay: 300ms;
  };
  ${media.xl`
    top: 28px;
  `}
`;

const Line = styled.line`
  stroke: black;
  stroke-width: 5;
`;

const Skill = ({ src, name }) => (
  <IconContainer>
    <Icon src={src} alt={name}/>
    <IconName>{name}</IconName>
    <SVGContainer>
      <SVGicon height="20" width="300">
        <Line x1="0" y1="0" x2="300" y2="0" />
      </SVGicon>
    </SVGContainer>
  </IconContainer>
)

export default Skill