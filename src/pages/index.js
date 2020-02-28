import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Resume from "../components/Contents/resume"
import Details from "../components/Contents/details"
import PersonalWorks from "../components/Contents/personal-works"

const IndexPage = ({ data, location }) => (
  <Layout location={location}>
    <SEO
      title={data.site.siteMetadata.title}
      description={data.site.siteMetadata.description}
      slug={"/"}
      article={false}
    />
    <Resume/>
    <Details/>
    <PersonalWorks/>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

export default IndexPage
