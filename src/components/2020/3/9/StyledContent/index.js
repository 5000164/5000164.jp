import styled from "styled-components"

export const StyledContent = styled.div`
  width: 600px;
  margin: 240px auto;
  @media (max-width: 1140px) {
    width: 75%;
  }
  h1 {
    margin: 120px 0 20px;
    padding: 0;
    font-weight: lighter;
    font-size: 3.2rem;
    letter-spacing: -0.05rem;
    line-height: 1.3;
    color: hsl(235, 10%, 24%);
  }
  @media (max-width: 1140px) {
    h1 {
      width: 75%;
    }
  }
  h2 {
    margin: 80px 0 20px;
    padding: 0;
    font-weight: lighter;
    font-size: 2.4rem;
    letter-spacing: -0.01rem;
    line-height: 1.3;
  }
  @media (max-width: 1140px) {
    h2 {
      width: 75%;
    }
  }
  h3 {
    margin: 80px 0 20px;
    padding: 0;
    font-weight: lighter;
    font-size: 1.8rem;
  }
  @media (max-width: 1140px) {
    h3 {
      width: 75%;
    }
  }
  h1 + h2,
  h2 + h3 {
    margin-top: 20px;
  }
  ul,
  ol {
    padding-left: 20px;
  }
  @media (max-width: 1140px) {
    ul > li,
    ol > li {
      margin-left: -20px;
    }
  }
`
