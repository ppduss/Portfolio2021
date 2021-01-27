import styled from "styled-components";
import React from "react"
import media from '../media';
import portrait from '../images/portrait3.png'


const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 12vw;
  margin-top: 400px;
`;

const PortImg = styled.img`
  width: 200px;
  border-radius: 35%;
  ${media.md`
    width: 220px;
`}
  ${media.xl`
    width: 280px;
`}
`

const Collage = () => (
  <ProfileContainer>
    <PortImg src={portrait}/>
    <h2>Patrick Dussault</h2>
    <h3>I develop websites</h3>
    <p>Check meee out</p>
    
  </ProfileContainer>
)

export default Collage