import React from "react"
import { graphql } from "gatsby"

import Layout from "../../../../components/Layout"
import SEO from "../../../../components/SEO"
import { Resume } from "../../../../components/2019/5/9/Resume"
import { Details } from "../../../../components/2019/5/9/Details"

const Page = ({
  data: {
    site: {
      siteMetadata: { title, description },
    },
  },
  location,
}) => (
  <Layout location={location}>
    <SEO
      title={title}
      description={description}
      slug={"/2019/5/9/"}
      article={false}
    />
    <Resume />
    <Details />
  </Layout>
)
export default Page

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
