import React from "react"
import { graphql } from "gatsby"

import Layout from "../../../../components/Layout"
import SEO from "../../../../components/SEO"
import { PersonalWorks } from "./components/PersonalWorks"
import { Basic } from "./components/Basic"
import { About } from "./components/About"
import { Experience } from "./components/Experience"
import { Education } from "./components/Education"
import { Skills } from "./components/Skills"
import { Certifications } from "./components/Certifications"
import { Licenses } from "./components/Licenses"

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
