import React from "react"
import styled from "styled-components";
import portrait from '../images/portrait_photo2.png'
import media from '../media';

const PortImg = styled.img`
  width: 220px;
  border-radius: 100%;
  ${media.md`
    width: 280px;
`}
  ${media.xl`
    width: 300px;
`}
`

const Portrait = () => (
  <PortImg src={portrait}/>
)

export default Portrait
