import styled, { keyframes } from "styled-components";
import React from "react"
import Skill from './Icons'
import CssIcon from '../../images/skills/css_icon.png'
import ReactIcon from '../../images/skills/react_icon.png'
import AutocadIcon from '../../images/skills/acadIcon.png'
import GitIcon from '../../images/skills/gitIcon.png'
import PhotoshopIcon from '../../images/skills/psIcon.png'
import IllustratorIcon from '../../images/skills/aiIcon.png'
import LightroomIcon from '../../images/skills/lrIcon.png'
import JsIcon from '../../images/skills/jsIcon.png'
import HtmlIcon from '../../images/skills/htmlIcon.png'
import FigmaIcon from '../../images/skills/figmaIcon.png'
import media from '../../media';


const TopSkills = styled.div`
  background-color: ${({ theme: { colors } }) => colors.lbutter};
  margin-bottom: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
    ${media.md`
    margin-bottom: 200px;
    flex-direction: column;
`}
`;


const SkillSet = () => (
  
  <TopSkills>
    <Skill src={HtmlIcon} name={"HTML5"}/>
    <Skill src={CssIcon} name={"CSS3"}/>
    <Skill src={JsIcon} name={"Javascript"}/>
    <Skill src={ReactIcon} name={"React"}/>
    <Skill src={GitIcon} name={"Github"}/>
    <Skill src={FigmaIcon} name={"Figma"}/>
    <Skill src={IllustratorIcon} name={"Illustrator"}/>
    <Skill src={PhotoshopIcon} name={"Photoshop"}/>
    <Skill src={LightroomIcon} name={"Lightroom"}/>
    <Skill src={AutocadIcon} name={"Autocad"}/>
  </TopSkills>

);

export default SkillSet