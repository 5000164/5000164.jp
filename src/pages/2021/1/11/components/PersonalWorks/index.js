import React from "react"
import styled from "styled-components"
import { Heading, Title } from "../Text"
import { personalWorks } from "../../contents"

export const PersonalWorks = () => (
  <>
    <Heading>個人制作物</Heading>
    {personalWorks.map((w, index) => (
      <React.Fragment key={index}>
        <Year>{w.year}</Year>
        {w.works.map((w, index) => (
          <React.Fragment key={index}>
            <Title>{w.title}</Title>
            <TechnologyStack>
              {w.technologyStack.map((t, index) => (
                <Technology key={index}>{t}</Technology>
              ))}
            </TechnologyStack>
            <Links>
              {w.links.map((l, index) => (
                <Link key={index}>
                  <a href={l.href}>{l.text}</a>
                </Link>
              ))}
            </Links>
          </React.Fragment>
        ))}
      </React.Fragment>
    ))}
  </>
)

const Year = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 600px;
  margin: 80px auto;

  &::before {
    content: "";
    display: block;
    width: 270px;
    height: 1px;
    background: hsl(235, 10%, 80%);
    border-radius: 8px;
  }

  &::after {
    content: "";
    display: block;
    width: 270px;
    height: 1px;
    background: hsl(235, 10%, 80%);
    border-radius: 8px;
  }
`

const TechnologyStack = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 8px;
  width: 600px;
  margin: 16px auto;
  padding: 0;
  list-style: none;
`

const Technology = styled.li`
  margin: 0;
`

const Links = styled.ul`
  width: 600px;
  margin: 16px auto;
  padding: 0;
`

const Link = styled.li`
  margin: 16px;
`
