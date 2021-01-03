import styled from "styled-components";
// import keyframes from "styled-components";
import React from "react";
import Button from "./Button";


const Proj = styled.div`
  background-color: whitesmoke;
  border-top: 5px solid #000000;
  margin-bottom: 60px;
  font-weight: 400;
  font-size: 0.8em;
  /* padding: 20px, 20px, 20px, 20px; */
`;

const Title = styled.h4`  
  max-width: 300px;
  background-color: #d4d4d4;
  padding: 12px;
  word-break: normal;
  height: 48px;
`;
const Subtitle = styled.p`
  /* display: relative;   */
  width: 70%;
  padding: 10px;
  word-break: normal;
`;

const FirstContainer = styled.div`
  display: flex;  
  justify-content: space-between;
  /* margin-left: 10px; */
  /* margin-bottom: 0px; */
`;
const SecondContainer = styled.div`  
  /* display: flex; */
  justify-content: center;
`;

const Tools = styled.div`
  background-color: white;
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
              <div key={i + s}>{s}</div>
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