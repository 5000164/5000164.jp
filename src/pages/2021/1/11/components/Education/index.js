import React from "react"
import styled from "styled-components"
import { education } from "../../contents"
import { Heading } from "../Text"

export const Education = () => (
  <>
    <Heading>学歴</Heading>
    {education.map((e, index) => (
      <React.Fragment key={index}>
        <StyledEducation>
          <School>{e.school}</School>
          <Period>{e.period}</Period>
          <Location>{e.location}</Location>
        </StyledEducation>
        {e.subjects.map((s, index) => (
          <React.Fragment key={index}>
            <Subject>- {s}</Subject>
          </React.Fragment>
        ))}
      </React.Fragment>
    ))}
  </>
)

const StyledEducation = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: end;
  width: 600px;
  margin: 80px auto 4px;
`

const School = styled.div`
  justify-self: start;
`

const Period = styled.div`
  justify-self: end;
  font-size: 1.4rem;
`

const Location = styled.div`
  grid-column-start: 1;
  grid-column-end: span 2;
  justify-self: end;
  font-size: 1.4rem;
`

const Subject = styled.div`
  width: 600px;
  margin: 4px auto;
  font-size: 1.4rem;
`
