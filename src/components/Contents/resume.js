import React from "react"
import styled from "styled-components"

const Resume = () => (
  <StyledResume>
    <h1>Resume</h1>
    <h2>Hiroshi Sugawara</h2>
    <p>Web Developer</p>
    <o>Melbourne, Australia</o>
    <h2>Profile</h2>
    <p>私は勉強熱心なプログラマーです。プログラマーとして 8
      年を超える経験を持っており、プログラミングやテストについての知識を持っています。問題に対してチームとして取り組むということを重要視しており、チームがうまく機能するように自律的に行動を起こします。安定的に不安定という思想を持っており、成長するために普段から新しいことを勉強し、転職や留学などの挑戦を続けています。</p>
    <h2>Skills</h2>
    <ul>
      <li>情報工学の知識に加え、8 年以上の経験によるプログラミングの知識</li>
      <li>言語、開発手法やツールに対する知識 PHP, Scala, Python, C#, Java, JavaScript, HTML, CSS, SQL, TDD, MySQL, Git, Docker, Vagrant,
        New Relic, Amazon Web Services, Issue Tracking System
      </li>
      <li>ユニットテストや E2E テストなどのテストに関する知識</li>
      <li>個人を尊重しながらうまくコミュニケーションを取りチームの働きを助ける</li>
      <li>作業手順や調査内容などを積極的に文書化する</li>
    </ul>
    <h2>Languages</h2>
    <ul>
      <li>Japanese - Native</li>
      <li>English - Intermediate (Grammar is equivalent to Upper-Intermediate)</li>
    </ul>
    <h2>Experience</h2>
    <h3>株式会社Everforth</h3>
    <p>Quality Assurance, 2017 to 2018</p>
    <p>Tokyo, Japan</p>
    <ul>
      <li>品質保証のためのテストを Scala で自動化</li>
      <li>負荷テストを行うシステムを Scala で開発</li>
    </ul>
    <h3>株式会社ミラボ</h3>
    <p>Web Developer, 2017 to 2017</p>
    <p>Tokyo, Japan</p>
    <ul>
      <li>Web システムを Python と C# で開発</li>
      <li>Docker を使用した環境の構築</li>
    </ul>
    <h3>株式会社インフィニットループ</h3>
    <p>Web Developer, 2015 to 2017</p>
    <p>Hokkaido, Japan</p>
    <ul>
      <li>ハイパフォーマンスな Web システムを PHP で開発</li>
      <li>運用時に発生した問題の迅速な調査と対応</li>
      <li>人数が多いチームのコミュニケーションをフォロー</li>
    </ul>
    <h3>ほか複数の会社で勤務</h3>
    <p>Developer, 2010 to 2015</p>
    <p>Miyagi, Japan and Tokyo, Japan</p>
    <ul>
      <li>主に Web システムの開発</li>
    </ul>
    <h2>Education</h2>
    <h3>仙台高等専門学校</h3>
    <p>Associates, Computer Science, 2005 to 2010</p>
    <p>Miyagi, Japan</p>
  </StyledResume>
)

const StyledResume = styled.header`
  width: 600px;
  margin: auto;
`

export default Resume
