import React from "react"
import PropTypes from "prop-types"
import { createGlobalStyle } from "styled-components"
import Footer from "../Footer"

const GlobalStyle = createGlobalStyle`
  html {
    width: 100%;
    height: 100%;
    margin: 0;
    font-family: serif;
    font-weight: lighter;
    font-size: 62.5%;
    font-kerning: normal; // フォントのカーニングを常に有効にする
    font-feature-settings: "palt"; // 自動カーニングさせる
    letter-spacing: 0.03rem; // 字間を調整
    -webkit-font-smoothing: antialiased; // フォントにアンチエイリアスをかける (少し細く見える)
    -moz-osx-font-smoothing: grayscale;
  }
  body {
    width: 100%;
    height: 100%;
    margin: 0;
    font-size: 1.8rem;
    line-height: 1.55;
    color: hsl(235, 10%, 28%);
    background-color: hsl(0, 100%, 100%);
    }
  @media (max-width: 1140px) {
    body {
      line-height: 1.9; // スマホでは行間を少し広くする
    }
  }
  a {
    color: hsl(235, 10%, 50%);
  }
  a:visited {
    color: hsl(235, 10%, 50%);
  }
  * {
    box-sizing: border-box;
  }
`

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle/>
      {children}
      <Footer/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
