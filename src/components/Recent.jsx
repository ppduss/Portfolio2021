import styled from "styled-components";
import React, { useState } from "react";
import media from '../media';
import Button2 from '../components/Button2.jsx'

const Proj = styled.div`
  position: relative;
  background-color: #000000;
  display: flex;  
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 4px;
  /* border-radius: 8px; */
  width: 275px;
  height: 275px;
  overflow: hidden;
  ${media.xs`
    width: 375px;
    height: 300px;
`}
`;

const BackgroundImg = styled.img`
  max-width: none;
  position: absolute;
  object-fit: cover;
  max-height: 100%;
  opacity: 10;
  transition: all 200ms linear;
  margin: 0 auto;
  ${Proj}:hover & {
    opacity: 0.5;
    filter: blur(4px);
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
  const [showButton, setShowButton] = useState(false);

  return (
    <Proj
      projectTheme={projTheme}
      onMouseEnter={() => setShowButton(true)}
      onMouseLeave={() => setShowButton(false)}
    >
      <BackgroundImg src={previewImg} alt={title}/>
      {/* <TitleContainer>
        <Title >{title}</Title>  
      </TitleContainer>   */}
      <Details>
        {showButton ? <Button2 goto={liveLink}>View Live</Button2> : null}
        {showButton && ghLink ? <Button2 goto={ghLink}>View Repo</Button2> : null}
        
      </Details>
    </Proj>

  )};

export default Recent