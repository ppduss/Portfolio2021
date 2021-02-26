import styled from "styled-components";
import React from "react";
import media from '../media';
import backgroundImg from '../images/recent-back.png'

const RecentButton = styled.button`
  margin: 0 5px;
  padding: 10px 15px;
  text-align: center;
  align-self: right;
  color: ${({ theme: { colors } }) => colors.black};
  background-color: ${({ theme: { colors } }) => colors.white};
  border: 1px solid ${({ theme: { colors } }) => colors.black};
  font-size: 0.8rem;
  border-radius: 3px;
  text-transform: uppercase;
  outline: none;
  box-shadow: none;
  &:focus {
  }
  &:visited {
    border-color: grey;
  }
   &:hover {
    background-color: ${({ theme: { colors } }) => colors.shadyblue};
    cursor: pointer;
  }
  &:active {
    border: 1px solid grey;
    outline: none;
  }
  ${media.sm`
  padding: 8px 20px;
`}
`;

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
  opacity: 0.6;
  transition: all 300ms linear;
     &:hover {
     opacity: 1;
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
          <RecentButton goto={liveLink}>View Live</RecentButton>
           <RecentButton goto={ghLink}>View Repo</RecentButton>
      </Details>
    </Proj>

  )};

export default Recent