import styled from "styled-components";
import React from "react"
import media from '../media';
import portrait from '../images/portrait3.png'


const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 250px;
  align-items: center;
  ${media.md`
  justify-content: space-between;
  margin-top: 400px;
  margin-left: 12vw;
`}
`;

const PortImg = styled.img`
  width: 200px;
  border-radius: 35%;
  ${media.md`
    width: 200px;
`}
  ${media.xl`
    width: 260px;
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