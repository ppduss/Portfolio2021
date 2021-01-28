import styled, { keyframes, css } from "styled-components";
import React from "react";
import Button from "./Button";
import media from '../media';

const Proj = styled.div`
  display: flex;  
  flex-direction: column;
  justify-content: space-between;
  background-color:${
    (props) => props.projectTheme === 'mars' ? ({ theme: { colors } }) => colors.twilight :
    props.projectTheme === 'coffee' ? ({ theme: { colors } }) => colors.lshadyblue :
    props.projectTheme === 'ratatap' ? ({ theme: { colors } }) => colors.black :
    props.projectTheme === 'rgb' ? ({ theme: { colors } }) => colors.clay : 'black' };
  /* border-top: 2px solid ${({ theme: { colors } }) => colors.grey}; */
  margin-bottom: 190px;
  /* margin-top: 80px; */
  height: 300px;
  font-weight: 400;
  font-size: 0.8em;
  ${media.xs`
    height: 600px;
    width: 600px;
    margin-bottom: 60px;

`}
  ${media.sm`
    height: 320px;
    width: 740px;
    flex-direction: row;
    margin-bottom: 60px;

`}
  ${media.md`
    height: 360px;
    width: 90%;
    max-width: 900px;
`}
  ${media.lg`
    height: 360px;
    width: 90%;
    max-width: 900px;
`}
  ${media.xl`
    height: 400px;
    max-width: 980px;
`}
`;

  const Title = styled.h4` 
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  width: 105%;
  color: ${({ theme: { colors } }) => colors.white};
  font-weight: 600;
  background-color:${
    (props) => props.projectTheme === 'mars' ? ({ theme: { colors } }) => colors.twilight2 :
    props.projectTheme === 'coffee' ? ({ theme: { colors } }) => colors.dshadyblue :
    props.projectTheme === 'ratatap' ? ({ theme: { colors } }) => colors.black :
    props.projectTheme === 'rgb' ? ({ theme: { colors } }) => colors.twilight : 'black' };
  padding-left: 18px;
  word-break: normal;
  margin: 0px;
  height: 50px;
`;

const Subtitle = styled.p`
  color: ${({ theme: { colors } }) => colors.white};
  font-size: 0.95rem;
  /* display: relative;   */
  /* width: 70%; */
  padding: 18px;
  word-break: normal;
  /* background-color: ${({ theme: { colors } }) => colors.lbutter}; */

`;


const FirstContainer = styled.div`  
  /* display: flex;
  flex-direction: column;
  justify-content: space-around; */
  /* padding: 0; */
`;

const Tools = styled.div`
  /* background-color: ${({ theme: { colors } }) => colors.twilight}; */
  display: flex;
  /* width: 30%; */
  min-width: 120px;
  padding: 10px;
`;

const Preview = styled.img`
  max-width: auto;
  max-height: auto;
  margin-bottom: 0;
  /* border-bottom: 4px solid ${({ theme: { colors } }) => colors.twilight};
  border-right: 4px solid ${({ theme: { colors } }) => colors.twilight};
  border-left: 4px solid ${({ theme: { colors } }) => colors.twilight}; */
`;



const Project = ({title, subTitle, previewImg, ghLink, liveLink, projSkills, projTheme}) => {
  
  return (
    <Proj projectTheme={projTheme}>
        <FirstContainer>
          <Title projectTheme={projTheme}>{title}</Title>
          <Subtitle projectTheme={projTheme}>{subTitle}</Subtitle>
          <Tools>
          {projSkills.map((s, i) => {
            return (
              <div key={i + s}>{s} &nbsp;</div>
            )
          })}
          </Tools>
          <Button goto={liveLink}>View Live</Button>
          <Button goto={ghLink}>View on GitHub</Button>
        </FirstContainer>
        
        <Preview src={previewImg}/>
    </Proj>

  )};

export default Project