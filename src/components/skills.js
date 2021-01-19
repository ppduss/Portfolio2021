import styled from "styled-components";
import React from "react"

const TopSkills = styled.div`
  background-color: ${({ theme: { colors } }) => colors.shadyblue};
  border-top: 1px solid #111;
  margin-bottom: 200px;

`;


const Skills = () => (
  
  <TopSkills>Some skills  here</TopSkills>

);

export default Skills