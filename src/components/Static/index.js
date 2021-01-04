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
  margin: 40px auto;
  font-size: 2.2rem;
  letter-spacing: -0.05rem;
  line-height: 1.3;
  text-align: center;
  color: hsl(235, 10%, 32%);
`

const StyledContent = styled.article`
  width: 600px;
  margin: 40px auto;
`

export default Static
