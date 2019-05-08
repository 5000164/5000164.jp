import React from "react"
import { graphql, Link, StaticQuery } from "gatsby"
import styled from "styled-components"

const Header = () => (
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
      <StyledHeader>
        <StyledTitleLink to="/">{data.site.siteMetadata.title}</StyledTitleLink>
      </StyledHeader>
    )}
  />
)

const StyledHeader = styled.header`
  width: 600px;
  margin: auto;
`

const StyledTitleLink = styled(props => <Link {...props} />)`
  color: hsl(235, 10%, 30%);
  text-decoration: none;
  &:visited {
    color: hsl(235, 10%, 30%);
  }
`

export default Header
