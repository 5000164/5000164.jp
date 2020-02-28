import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Static from "../components/Static"

export default ({ location }) => {
  return (
    <Layout location={location}>
      <SEO title={"Privacy Policy | About 5000164"} description={"Privacy Policy"} slug={"/privacy/"} article={false}/>
      <Static
        title={"Privacy Policy"}
        content={
          "<p>このウェブサイトでは Cookie を使用します。</p>" +
          "<p>このウェブサイトでは <a href='https://marketingplatform.google.com/about/analytics/'>Google Analytics</a> を使用しています。" +
          "Google Analytics でデータが収集、処理される仕組みについては " +
          "<a href='https://www.google.com/intl/ja/policies/privacy/partners/'>ユーザーが Google パートナーのサイトやアプリを使用する際の Google によるデータ使用</a>" +
          " のページを参照してください。</p>"
        }
      />
    </Layout>
  )
}
