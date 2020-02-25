import React from "react"
import { graphql, Link, StaticQuery } from "gatsby"
import styled from "styled-components"

const Footer = () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <StyledFooter>
        <div>
          <Link to="/">{data.site.siteMetadata.title}</Link>
        </div>
        <div>Copyright © 2020 Hiroshi Sugawara. All rights reserved.</div>
      </StyledFooter>
    )}
  />
)

const StyledFooter = styled.footer`
  margin: 120px auto 20px;
  font-size: 1.2rem;
  text-align: center;
  color: hsl(235, 10%, 65%);
  @media (max-width: 800px) {
    width: 95%;
  }
`

export default Footer
