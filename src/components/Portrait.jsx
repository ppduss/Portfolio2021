import React from "react"
import styled from "styled-components";
import media from '../media';

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

const Portrait = () => (
  <PortImg src={portrait}/>
)

export default Portrait
