import React from "react";
import styled from "styled-components";
import Theme from '../Theme';
import media from '../media';
import aboutImg from '../images/tempimg.png';

const AboutContainer = styled.div`
  background-color: ${({ theme: { colors } }) => colors.twilight};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 160px;
  height: 1000px;
`;

const AboutTitle = styled.h1`
  color: ${({ theme: { colors } }) => colors.white};
`;

const AboutSecondContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AboutImg = styled.img`
  /* margin-top: 180px; */
  filter: grayscale(100);
  width: 400px;
`;

const AboutTxt = styled.p`
  background-color: ${({ theme: { colors } }) => colors.twilight};
  border-radius: 15px;
  /* margin-top: 280px; */
  color: white;
  width: 350px;
  height: 400px;
  padding: 20px;
`;

const About = () => (
  <AboutContainer>
    <AboutTitle>About<br />me</AboutTitle>
    <AboutSecondContainer>
      <AboutImg src={aboutImg}/>
      <AboutTxt>I'm a front-end developer based in Montreal who loves creating beautiful and engaging websites built with elegant code. Always interested in exploring new and creative ways to improve efficiency user experience. I also have experience with 2D/3D modeling for manufacturing, 3D printing, CNC programming, and photography editing.</AboutTxt>
    </AboutSecondContainer>
  </AboutContainer>
)

export default About;