import React from "react"
import styled from "styled-components"
import { certifications } from "../../contents"
import { Heading, Key, Value } from "../Text"

export const Certifications = () => (
  <>
    <Heading>認定</Heading>
    {certifications.map((c, index) => (
      <StyledCertification key={index}>
        <Key>{c.title}</Key>
        <Value>{c.date}</Value>
      </StyledCertification>
    ))}
  </>
)

const StyledCertification = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: end;
  width: 600px;
  margin: 16px auto;
`
