import React from "react"
import { graphql } from "gatsby"

import Layout from "../../../../components/Layout"
import SEO from "../../../../components/SEO"
import { Basic } from "../../../../components/2021/1/11/Basic"
import { About } from "../../../../components/2021/1/11/About"
import { Skills } from "../../../../components/2021/1/11/Skills"
import { Experience } from "../../../../components/2021/1/11/Experience"
import { Education } from "../../../../components/2021/1/11/Education"
import { Certifications } from "../../../../components/2021/1/11/Certifications"
import { Licenses } from "../../../../components/2021/1/11/Licenses"
import { PersonalWorks } from "../../../../components/2021/1/11/PersonalWorks"

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
      slug={"/2020/5/20/"}
      article={false}
    />
    <Basic />
    <About />
    <Skills />
    <Experience />
    <Education />
    <Certifications />
    <Licenses />
    <PersonalWorks />
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
