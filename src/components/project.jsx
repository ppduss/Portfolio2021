import styled from "styled-components";
import React from "react";
import Button from "./Button";


const Proj = styled.div`
display: flex;
  background-color: whitesmoke;
  border-top: 5px solid #000000;
  margin-bottom: 35px;
  font-weight: 400;
  font-size: 0.8em;
  padding: 20px;
`;

const Tools = styled.div`
  background-color: white;
  /* display: flex; */
  width: 30%;
  min-width: 120px;
  padding: 5px;
`;

const Preview = styled.img`
  width: 200px;
`;

const Project = ({title, subTitle, previewImg, ghLink, liveLink, projSkills}) => {
  
  return (
      <Proj>
        <h4>{title}</h4>
        <p>{subTitle}</p>
        <Tools>
        {projSkills.map((s, i) => {
          return (
            <div key={i + s}>{s}</div>
          )
        })}
        </Tools>
        <Preview src={previewImg}/>
        <Button goto={liveLink}>View Live</Button>
        <Button goto={ghLink}>View on GitHub</Button>
        
      </Proj>

  )};

export default Project