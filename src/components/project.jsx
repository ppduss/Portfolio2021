import styled from "styled-components";
import React from "react";
import Button from "./Button";

const Proj = styled.div`
  background-color: whitesmoke;
  border-top: 1px solid #111;
  margin-bottom: 40px;
  font-weight: 400;
  font-size: 0.8em;
`;

const Tools = styled.div`
  background-color: white;
  display: flex;
`;


const Project = ({title, subTitle, ghLink, liveLink, projSkills}) => {
  
  return (
      <Proj>
      
        <a target="_blank" rel="noopener noreferrer" href={liveLink} className="box">
          <h4>{title}</h4>
          <p>{subTitle}</p>
          </a>
        {/* <p>{projSkills}</p> */}
        <Tools>
        {projSkills.map((s, i) => {
          return (
            <div key={i + s}>{s}</div>
          )
        })}
        </Tools>
        <Button goto={liveLink}>View Live</Button>
        <Button goto={ghLink}>View on GitHub</Button>
        
      </Proj>

  )};

export default Project