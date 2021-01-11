import React from "react"
import styled from "styled-components"
import { Heading, Key, Value } from "../Text"

export const Basic = () => (
  <>
    <Heading>基本情報</Heading>
    <Information>
      <Key>名前</Key>
      <Value>菅原 浩</Value>
    </Information>
    <Information>
      <Key>ブログ</Key>
      <Value>
        <a href="https://blog.5000164.jp/">https://blog.5000164.jp/</a>
      </Value>
    </Information>
    <Information>
      <Key>GitHub</Key>
      <Value>
        <a href="https://github.com/5000164">https://github.com/5000164</a>
      </Value>
    </Information>
  </>
)

const Information = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: end;
  width: 600px;
  margin: 16px auto;
`
