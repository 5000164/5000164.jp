import React from "react"
import styled from "styled-components"
import { nl2br } from "../../../../../util/nl2br"
import { Heading, Title } from "../Text"
import { skills } from "../../../../../contents/2021/1/11"

export const Skills = () => (
  <>
    <Heading>スキル</Heading>
    {skills.map((s, index) => (
      <React.Fragment key={index}>
        <Title>{s.title}</Title>
        {s.contents.map((c, index) => (
          <StyledSkill key={index}>
            <Name>{c.name}</Name>
            <Description>{nl2br(c.description)}</Description>
          </StyledSkill>
        ))}
      </React.Fragment>
    ))}
  </>
)

const StyledSkill = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 16px;
  width: 600px;
  margin: 40px auto;
`

const Name = styled.div``

const Description = styled.div``
