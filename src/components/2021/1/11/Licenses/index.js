import React from "react"
import styled from "styled-components"
import { Heading, Key, Value } from "../Text"
import { licenses } from "../../../../../contents/2021/1/11"

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
