import styled from "styled-components";
import React from "react";
import Button from "./Button.jsx";
import media from '../media';

const Proj = styled.div`
  display: flex;  
  flex-direction: column;
  justify-content: space-between;
  background-color:${(props) => props.projectTheme === 'mars' ? ({ theme: { colors } }) => colors.butter :
    props.projectTheme === 'coffee' ? ({ theme: { colors } }) => colors.lshadyblue :
      props.projectTheme === 'ratatap' ? ({ theme: { colors } }) => colors.greypoupon :
        props.projectTheme === 'rgb' ? ({ theme: { colors } }) => colors.butter : 'black'};
  /* border-top: 2px solid ${({ theme: { colors } }) => colors.grey}; */
  margin-bottom: 50px;
  border: 1px solid ${({ theme: { colors } }) => colors.twilight};
  border-radius: 3px;
  height: 275px;
  font-weight: 400;
  font-size: 0.8em;
  width: 95%;
  max-width: 850px;

  ${media.xs`
  height: 320px;
  width: 95%;
  margin-bottom: 60px;
  `}
  ${media.sm`
  width: 85%;
  `}
  ${media.md`
  width: 80%;
  `}
  ${media.lg`
  width: 75%;
  `}
`;


const TitleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  min-height: 15%;
  width: 100%;
  background-color:${
    (props) => props.projectTheme === 'mars' ? ({ theme: { colors } }) => colors.twilight:
    props.projectTheme === 'coffee' ? ({ theme: { colors } }) => colors.twilight :
    props.projectTheme === 'ratatap' ? ({ theme: { colors } }) => colors.twilight:
    props.projectTheme === 'rgb' ? ({ theme: { colors } }) => colors.twilight : 'black' };
`;

  const Title = styled.h4` 
  font-size: 1.2rem;
  color: ${({ theme: { colors } }) => colors.white};
  font-weight: 600;
  padding-left: 28px;
  margin: 0px;
`;

const Subtitle = styled.p`
  color: ${({ theme: { colors } }) => colors.black};
  font-size: 0.9rem;
  word-break: normal;
  margin-bottom: 1rem;
  text-align: center;
  ${media.sm`
    text-align: left;
    font-size: 0.9rem;
    margin-bottom: 2rem;
  `} 
`;


const Content = styled.div`  
  width: 100%;
  height: 85%;
  display: flex;
     flex-direction: column;
  align-items: center;
  justify-content: center;
     ${media.xs`
     flex-direction: row;
  justify-content: space-between;

  `}
`;

const Tools = styled.div`
  /* background-color: ${({ theme: { colors } }) => colors.twilight}; */
  display: flex;
  justify-content: center;
  min-width: 120px;
  margin-bottom: 1rem;
    ${media.sm`
  justify-content: flex-start;

    margin-bottom: 2rem;
  `} 
`;

const Preview = styled.img`
  height: 100%;
  margin-bottom: 0;
  display: none;
    ${media.xs`
    display: block;
  `} 
`;

const Details = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
  width: 90%;
  padding: 28px;
  ${media.xs`
  align-items: flex-start;
  width: 60%;
  `}
`;

const Project = ({title, subTitle, previewImg, ghLink, liveLink, projSkills, projTheme}) => {
  
  return (
    <Proj projectTheme={projTheme}>
      <TitleContainer projectTheme={projTheme}>
        <Title >{title}</Title>  
      </TitleContainer>  
      <Content>
        <Details>
          <Subtitle projectTheme={projTheme}>{subTitle}</Subtitle>
          <Tools>
          {projSkills.map((s, i) => {
            return (
              <div key={i + s}>{s} &nbsp;&nbsp;</div>
            )
          })}
          </Tools>
          <div>
            <Button goto={liveLink}>View Live</Button>
            <Button goto={ghLink}>View Repo</Button>
          </div>
        </Details>
        <Preview src={previewImg} alt={title}/>
      </Content>
    </Proj>

  )};

export default Project