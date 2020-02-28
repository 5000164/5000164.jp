import React from "react"
import styled from "styled-components"

const Static = ({ title, content }) => {
  return (
    <>
      <StyledTitle>{title}</StyledTitle>
      <StyledContent dangerouslySetInnerHTML={{ __html: content }} />
    </>
  )
}

const StyledTitle = styled.div`
  width: 600px;
  margin: 20px auto;
  font-size: 2rem;
  text-align: center;
  color: hsl(235, 10%, 5%);
  @media (max-width: 1140px) {
    width: 95%;
  }
`

const StyledContent = styled.article`
  width: 600px;
  margin: 20px auto;
  @media (max-width: 1140px) {
    width: 75%;
  }
`

export default Static
