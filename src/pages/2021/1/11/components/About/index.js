import React from "react"
import { nl2br } from "../../../../../../util/nl2br"
import { about } from "../../contents"
import { Heading, Paragraph, Title } from "../Text"

export const About = () => (
  <>
    <Heading>私について</Heading>
    {about.map((a, index) => (
      <React.Fragment key={index}>
        <Title>{a.title}</Title>
        {a.paragraphs.map((p, index) => (
          <Paragraph key={index}>{nl2br(p)}</Paragraph>
        ))}
      </React.Fragment>
    ))}
  </>
)
