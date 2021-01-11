import React from "react"
import styled from "styled-components"
import { graphql, Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

const Page = ({
  data: {
    site: {
      siteMetadata: { title, description },
    },
  },
  location,
}) => (
  <Layout location={location}>
    <SEO title={title} description={description} slug={"/"} article={false} />

    <Avatar
      src={"https://www.gravatar.com/avatar/9512465540830de4b91ac3931f1ddfb5"}
    />
    <Name>菅原 浩</Name>
    <About>
      Web プログラマー。 好きな言葉は「安定的に不安定」。
      いろんな会社で働いた後、オーストラリアで英語を勉強し、デンマークで幸せについて考えて、帰国後は海の近くで生活中。
    </About>

    <ResumeHeading>職務経歴書</ResumeHeading>
    <ResumeList>
      <ResumeListItem>
        <Link to="/2021/1/11/">/2021/1/11/</Link>
      </ResumeListItem>
      <ResumeListItem>
        <Link to="/2020/3/9/">/2020/3/9/</Link>
      </ResumeListItem>
      <ResumeListItem>
        <Link to="/2019/5/9/">/2019/5/9/</Link>
      </ResumeListItem>
      <ResumeListItem>
        <Link to="/2017/12/1/">/2017/12/1/</Link>
      </ResumeListItem>
    </ResumeList>
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

const Avatar = styled.img`
  display: block;
  width: 80px;
  height: 80px;
  margin: 320px auto 16px;
  border-radius: 50%;
`

const Name = styled.div`
  width: 600px;
  margin: 16px auto;
  text-align: center;
`

const About = styled.div`
  width: 600px;
  margin: 16px auto;
`

const ResumeHeading = styled.div`
  width: 600px;
  margin: 320px auto 80px;
  padding: 0;
  font-size: 2.2rem;
  letter-spacing: -0.05rem;
  line-height: 1.3;
  text-align: center;
  color: hsl(235, 10%, 32%);
`

const ResumeList = styled.ul`
  width: 600px;
  margin: 80px auto 320px;
  padding: 0;
`

const ResumeListItem = styled.li`
  margin: 16px;
`
