import styled from "styled-components";
// import keyframes from "styled-components";
import React from "react";
import Button from "./Button";


const Proj = styled.div`
/* display: flex; */
/* flex-direction: column; */
  background-color: whitesmoke;
  border-top: 5px solid #333333;
  margin-bottom: 35px;
  font-weight: 400;
  font-size: 0.8em;
  /* padding: 20px, 20px, 20px, 20px; */
`;

const Title = styled.h4`  
  /* max-width: 100px; */
  background-color: #d4d4d4;
  padding: 12px;
  word-break: normal;
  height: 100px;
`;
const Subtitle = styled.p`
  /* display: relative;   */
  width: 70%;
  padding: 10px;
  word-break: normal;
`;

const FirstContainer = styled.div`
display: flex;  
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
  width: 200px;
`;

const Project = ({title, subTitle, previewImg, ghLink, liveLink, projSkills}) => {
  
  return (
    <Proj>
      <FirstContainer>
        <Title>{title}</Title>
        <SecondContainer>
        <Subtitle>{subTitle}</Subtitle>
          
        <Tools>
          {projSkills.map((s, i) => {
            return (
              <div key={i + s}>{s}</div>
            )
          })}
        </Tools>
        
      </SecondContainer>
      <Preview src={previewImg}/>
      </FirstContainer> 
   
        
      <Button goto={liveLink}>View Live</Button>
      <Button goto={ghLink}>View on GitHub</Button>
      
      </Proj>

  )};

export default Project