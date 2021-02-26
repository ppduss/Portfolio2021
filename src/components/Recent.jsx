import styled from "styled-components";
import React from "react";
import Button from "./Button";
import media from '../media';
import backgroundImg from '../images/recent-back.png'

const Proj = styled.div`
  z-index: 99;
  display: flex;  
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  margin-bottom: 50px;
  background-color:#FEC491;
  border: 1px solid ${({ theme: { colors } }) => colors.twilight};
  border-radius: 3px;
  height: 275px;
  font-weight: 400;
  font-size: 0.8em;
  width: 95%;
  ${media.xs`
  height: 200px;
  width: 95%;
  margin-bottom: 80px;
  `}
  ${media.sm`
  width: 85%;
  `}
  ${media.md`
  width: 80%;
  `}
  ${media.lg`
  width: 400px;
  `}
`;


const BackgroundImgContainer = styled.div`

  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  /* z-index: -99; */
  /* left: 0px; */
`;
const BackgroundImg = styled.img`
  position: absolute;
  z-index: -99;
  /* width: 600px; */
  top: -10px;
`;

const TitleContainer = styled.div`
  background-color: ${({ theme: { colors } }) => colors.dshadyblue};
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 15%;
  width: 100%;
`;

  const Title = styled.h4` 
  font-size: 1.2rem;
  color: ${({ theme: { colors } }) => colors.white};
  font-weight: 600;
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
 justify-content: center;
  width: 100%;
  padding: 30px;
  ${media.xs`
    align-items: center;
    width: 100%;
  `}
`;

const Recent = ({title, subTitle, previewImg, ghLink, liveLink, projSkills, projTheme}) => {
  
  return (
    <Proj projectTheme={projTheme}>
      <BackgroundImgContainer>
        <BackgroundImg src={backgroundImg} />
      </BackgroundImgContainer>
      <TitleContainer>
        <Title >{title}</Title>  
      </TitleContainer>  
      <Content>
        <Details>
          <Subtitle projectTheme={projTheme}>{subTitle}</Subtitle>
          {/* <Tools>
          {projSkills.map((s, i) => {
            return (
              <div key={i + s}>{s} &nbsp;&nbsp;</div>
            )
          })}
          </Tools> */}
          <div>
            <Button goto={liveLink}>View Live</Button>
            <Button goto={ghLink}>View Repo</Button>
          </div>
        </Details>
        <Preview src={previewImg}/>
      </Content>
    </Proj>

  )};

export default Recent