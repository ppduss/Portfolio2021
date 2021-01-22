import styled, { keyframes } from "styled-components";
import React from "react"
import Skill from './Icons'
import CssIcon from '../../images/skills/css_icon.png'
import ReactIcon from '../../images/skills/react_icon.png'


const TopSkills = styled.div`
  background-color: ${({ theme: { colors } }) => colors.butter};
  margin-bottom: 200px;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;


const SkillSet = () => (
  
  <TopSkills>
    <Skill src={ReactIcon} name={"React"}/>
    <Skill src={CssIcon} name={"CSS"}/>
    <Skill src={ReactIcon} name={"React"}/>
    <Skill src={CssIcon} name={"React"}/>
    <Skill src={ReactIcon} name={"React"}/>
  </TopSkills>

);

export default SkillSet