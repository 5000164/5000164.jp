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
    render={(data) => (
      <StyledFooter>
        <div>
          <Link to="/">{data.site.siteMetadata.title}</Link>
        </div>
        <div>
          <Link to={"/privacy/"}>Privacy Policy</Link>
        </div>
        <div>Copyright © 2020 Hiroshi Sugawara. All rights reserved.</div>
      </StyledFooter>
    )}
  />
)

const StyledFooter = styled.footer`
  width: 600px;
  margin: 240px auto 20px;
  @media (max-width: 1140px) {
    width: 75%;
  }
`

export default Footer
