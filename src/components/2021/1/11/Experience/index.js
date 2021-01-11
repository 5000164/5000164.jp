import React from "react"
import styled from "styled-components"
import { Heading } from "../Text"
import { experience } from "../../../../../contents/2021/1/11"

export const Experience = () => (
  <>
    <Heading>職歴</Heading>
    {experience.map((e, index) => (
      <StyledExperience key={index}>
        <Company>{e.company}</Company>
        <Period>{e.period}</Period>
        <Role>{e.role}</Role>
        <Location>{e.location}</Location>
      </StyledExperience>
    ))}
  </>
)

const StyledExperience = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: end;
  width: 600px;
  margin: 80px auto;
`

const Company = styled.div`
  justify-self: start;
`

const Role = styled.div`
  justify-self: start;
  font-size: 1.4rem;
`

const Period = styled.div`
  justify-self: end;
  font-size: 1.4rem;
`

const Location = styled.div`
  justify-self: end;
  font-size: 1.4rem;
`
