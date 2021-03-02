import styled from "styled-components";
import React from "react";
import media from '../media';
import Button2 from '../components/Button2.jsx'

const Proj = styled.div`
  position: relative;
  background-color: #000000;
  display: flex;  
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
  border-radius: 3px;
  width: 275px;
  height: 275px;
  overflow: hidden;
    ${media.xs`
    width: 300px;
  height: 300px;
`}
`;

const BackgroundImg = styled.img`
  width: 100%;
  height: 100%;
  opacity: 0.5;
  transition: all 300ms linear;
     &:hover {
     opacity: 0.8;
  }
`;

const TitleContainer = styled.div`
  position: absolute;
  /* background-color: ${({ theme: { colors } }) => colors.dshadyblue}; */
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 15%;
  width: 100%;
  top: 10%;

`;

const Title = styled.h4` 
  font-size: 1.2rem;
  color: ${({ theme: { colors } }) => colors.white};
  font-weight: 600;
  margin: 0px;
`;


const Details = styled.div`
position: absolute;
 display: flex;
 flex-direction: row;
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
        <BackgroundImg src={previewImg} />
      {/* <TitleContainer>
        <Title >{title}</Title>  
      </TitleContainer>   */}
      <Details>
          <Button2 goto={liveLink}>View Live</Button2>
           <Button2 goto={ghLink}>View Repo</Button2>
      </Details>
    </Proj>

  )};

export default Recent