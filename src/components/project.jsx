import styled, { keyframes, css } from "styled-components";
import React from "react";
import Button from "./Button";
import Theme from '../Theme';
import media from '../media';

const Proj = styled.div`
  background-color: ${({ theme: { colors } }) => colors.white};
  /* border: 1px solid black; */
  border-top: 2px solid ${({ theme: { colors } }) => colors.black};
  margin-bottom: 60px;
  /* margin-top: 80px; */
  font-weight: 400;
  font-size: 0.8em;
  max-width: 850px;
  /* padding: 20px, 20px, 20px, 20px; */
`;

const Title = styled.h4` 
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  width: 105%;
  color: ${({ theme: { colors } }) => colors.black};
  font-weight: 600;
  background-color:${({ theme: { colors } }) => colors.darkshadyblue};
  padding-left: 18px;
  word-break: normal;
  margin: 0px;
  height: 50px;
`;
const Subtitle = styled.p`
  /* display: relative;   */
  width: 70%;
  padding: 18px;
  word-break: normal;
  /* background-color: ${({ theme: { colors } }) => colors.lightbutter}; */

`;

const FirstContainer = styled.div`
  display: flex;  
  justify-content: space-between;
  /* margin-left: 10px; */
  /* margin-bottom: 0px; */
`;
const SecondContainer = styled.div`  
  /* display: flex;
  flex-direction: column;
  justify-content: space-around; */
  padding: 0;
`;

const Tools = styled.div`
  /* background-color: ${({ theme: { colors } }) => colors.clay}; */
  display: flex;
  /* width: 30%; */
  min-width: 120px;
  padding: 10px;
`;

const Preview = styled.img`
  width: 300px;
  margin-bottom: 0;
`;

const Project = ({title, subTitle, previewImg, ghLink, liveLink, projSkills}) => {
  
  return (
    <Proj>
      <FirstContainer>
        <SecondContainer>
          <Title>{title}</Title>
          <Subtitle>{subTitle}</Subtitle>
          <Tools>
          {projSkills.map((s, i) => {
            return (
              <div key={i + s}>{s} &nbsp;</div>
            )
          })}
          </Tools>
          <Button goto={liveLink}>View Live</Button>
          <Button goto={ghLink}>View on GitHub</Button>
        </SecondContainer>
        
        <Preview src={previewImg}/>
      </FirstContainer> 
    </Proj>

  )};

export default Project