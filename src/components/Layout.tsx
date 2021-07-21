import React, { useContext } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Nav from "./Nav"
import GlobalStyle from "../../styles/globalStyle"
import { css, Global } from "@emotion/react"
import { default as THEME } from "../../styles/theme"
import Blog from "./Blog"
import { ThemeContext } from "../components/ThemeContext"

interface Props {
  children?: any
  pageTitle?: string
}

const Layout = ({ pageTitle, children }: Props) => {
  const [theme, onToggle] = useContext(ThemeContext)

  return (
    <>
      <Global styles={GlobalStyle(THEME[theme])} />
      <Nav />
      {pageTitle === "home" ? <Blog /> : <div>{children}</div>}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
