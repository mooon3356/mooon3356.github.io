import * as React from "react"
import { Link } from "gatsby"
import Blog from "../components/Blog"
import Seo from "../components/Seo"
import { css } from "@emotion/react"
import Nav from "../components/Nav"

const IndexPage = () => (
  <div css={Container}>
    <Nav />
      <Seo title="Home" />
      <Blog></Blog>
  </div>
)

export default IndexPage

export const Container = css`
  width: 100%;
  height: 100vh;
`
