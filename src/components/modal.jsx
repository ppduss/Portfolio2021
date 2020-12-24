import {styled, css, keyframes }from "styled-components";
import React from "react";

// @import compass // n is number of stars required

const multipleboxshadow = (n) => {
  $value: "#{random(2000)}px #{random(2000)}px #000"
  @for $i from 2 through $n
  $value: "#{$value} , #{random(2000)}px #{random(2000)}px #000"
  @return unquote($value)
};

const shadowssmall = multipleboxshadow(100);
const shadowsmedium = multipleboxshadow(200);
const shadowsbig = multipleboxshadow(100);
    

const animStar = keyframes`
  from {
    transform: translateY(0px);
  }
  to {
  transform: translateY(-2000px);
  } 
`;

const Intro = styled.div`
  z-index: 50;
  height: 100%;
  background: radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%);
  background-color: #725e5e;
  overflow: hidden;
`;

const Stars = css`
  width: px;
  height: 6px;
  background: transparent;
  box-shadow: ${shadowssmall};
  animation: ${animStar} 70s linear infinite;
   
  &:after {
    content: " ";
    position: absolute;
    top: 2000px;
    width: px;
    height: 6px;
    background: transparent;
    box-shadow: ${shadowssmall};
  }
`;

const Stars2 = css`
  width: px;
  height: 3px;
  background: transparent;
  box-shadow: ${shadowsmedium};
  animation: ${animStar} 100s linear infinite;
    
  &:after {
    content: " ";
    position: absolute;
    top: 2000px;
    width: px; 
    height: 3px;
    background: transparent;
    box-shadow: ${shadowsmedium};
  }
`;

const Stars3 = css`
  width: px;
  height: 1px;
  background: transparent;
  box-shadow: ${shadowsbig};
  animation: ${animStar} 150s linear infinite;
    
  &:after {
    content: " ";
    position: absolute;
    top: 2000px;
    width: px;
    height: 1px;
    background: transparent;
    box-shadow: ${shadowsbig};
  }
`;

const Title = styled.h1`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  
  color: #fff;
  text-align: center;
  font-family: 'lato',sans-serif;
  font-weight: 300;
  font-size: 40px;
  letter-spacing: 10px;
  background-color: #000;
  
  margin-top: -60px;
  padding-left: 10px;
`;


// function openLightbox() {
//   document.getElementById("mylightbox").style.display = "inherit";
//   document.getElementById("overlay").style.display = "block";
//   };
// function closeLightbox() {
//   document.getElementById("mylightbox").style.display = "none";
//   document.getElementById("overlay").style.display = "none";
//   };

const Modal = () => {

  return (
  <Intro>
    <Stars/>
    <Stars2/>
    <Stars3/>
    <Title><p>Patrick Dussault - Web Developer<br/>Welcome</p></Title>
  </Intro>
  )

};
      
export default Modal
