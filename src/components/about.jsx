import React from "react";
import styled from "styled-components";
import Theme from '../Theme';
import media from '../media';


const AboutTxt = styled.p`
/* font-size: 0.95rem; */
  background-color: ${({ theme: { colors } }) => colors.twilight};
  border-radius: 15px;
  color: white;
  width: 350px;
  height: 400px;
  padding: 20px;
  text-align: center;
`;

const About = () => (
  <AboutTxt>I'm a front-end developer based in Montreal who loves creating beautiful and engaging websites built with elegant code. Always interested in exploring new and creative ways to improve efficiency user experience. I also have experience with 2D/3D modeling for manufacturing, 3D printing, CNC programming, and photography editing.</AboutTxt>
)

export default About;