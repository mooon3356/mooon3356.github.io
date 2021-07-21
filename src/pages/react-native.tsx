import React, { useContext } from "react"
import Nav from "../components/Nav"
import { Box, Container, Title, Description } from "../../styles/pageLayout"
import { css } from "@emotion/react"
import { PageNum } from "../../styles/postList"
import Preparing from "../components/Preparing"
import Layout from "../components/Layout"
import themeGroup from "../../styles/theme"
import { ThemeContext } from "../components/ThemeContext"

const ReactNativePage = () => {
  const [themeMode] = useContext(ThemeContext)
  const theme = themeGroup[themeMode]

  return (
    <Layout pageTitle="react-native">
      <div css={Container}>
        <div css={[Box]}>
          <div css={Title(theme)}>React Native</div>
          <div css={Description(theme)}>
            React Native 개발을 진행하면서 공부한 것들을 정리하였습니다.
          </div>
        </div>
        <div css={Box}>
          <Preparing />
        </div>
        <span css={PageNum}>03</span>
      </div>
    </Layout>
  )
}

export default ReactNativePage
