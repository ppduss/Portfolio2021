import React from "react"
import styled from "styled-components";
import portrait from '../images/portrait_photo2.png'

const PortImg = styled.img`
  width: 280px;
  border-radius: 50%;

`

const Portrait = () => (
  <PortImg src={portrait}/>
)

export default Portrait
