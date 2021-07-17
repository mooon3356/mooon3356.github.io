import React from "react"
import { css } from "@emotion/react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Nav = () => {
  return (
    <div css={Container}>
      <div css={LeftBox}>
        <StaticImage
          src="../images/moon_off.png"
          width={30}
          quality={100}
          formats={["auto", "webp", "avif"]}
          alt="A Gatsby astronaut"
          css={Image}
        />
        <span>Moon.log</span>
      </div>
      <div css={RightBox}>
        <Link css={Category} to="/">
          Blog
        </Link>
        <Link css={Category} to="/portfolio">
          Portfolio
        </Link>
        <span css={Category}>About</span>
      </div>
    </div>
  )
}

export default Nav

const Container = css`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 0.5rem;
`

const LeftBox = css`
  width: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const RightBox = css`
  width: 15%;
`

const Image = css`
  margin-right: 0.4rem;
`

const Category = css`
  padding-right: 1rem;
`
