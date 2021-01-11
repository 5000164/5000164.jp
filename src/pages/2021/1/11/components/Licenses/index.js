import React from "react"
import styled from "styled-components"
import { licenses } from "../../contents"
import { Heading, Key, Value } from "../Text"

export const Licenses = () => (
  <>
    <Heading>資格</Heading>
    {licenses.map((l, index) => (
      <StyledLicense key={index}>
        <Key>{l.title}</Key>
        <Value>{l.date}</Value>
      </StyledLicense>
    ))}
  </>
)

const StyledLicense = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: end;
  width: 600px;
  margin: 16px auto;
`
