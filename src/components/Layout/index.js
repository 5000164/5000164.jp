import React from "react"
import PropTypes from "prop-types"
import { createGlobalStyle } from "styled-components"

import Header from "../Header"
import Footer from "../Footer"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      {children}
      <Footer />
    </>
  )
}

const GlobalStyle = createGlobalStyle`
  html {
    width: 100%;
    height: 100%;
    margin: 0;
    font-size: 62.5%;
    font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", "ヒラギノ角ゴ ProN W3", "Hiragino Kaku Gothic ProN", sans-serif;
    font-kerning: normal; // フォントのカーニングを常に有効にする
    font-feature-settings: "palt"; // 自動カーニングさせる
    letter-spacing: 0.02rem; // 字間を調整
    -webkit-font-smoothing: antialiased; // フォントにアンチエイリアスをかける (少し細く見える)
    -moz-osx-font-smoothing: grayscale;
  }
  body {
    width: 100%;
    height: 100%;
    margin: 0;
    font-size: 1.8rem;
    line-height: 1.73;
    color: hsl(235, 10%, 30%);
    background-color: hsl(0, 100%, 100%);
    }
  @media (max-width: 800px) {
    body {
      line-height: 1.9; // スマホでは行間を少し広くする
    }
  }
  a {
    color: hsl(235, 10%, 50%);
    text-decoration: none;
  }
  a:visited {
    color: hsl(235, 10%, 50%);
  }
  * {
    box-sizing: border-box;
  }
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
