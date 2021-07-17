// Step 1: Import your component
import * as React from 'react'
import Layout from '../components/Layout'
// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle="About me">
      <title>About Me</title>
      <p>안녕하세요. 여기는 저에 대한 소개 페이지입니다.</p>
    </Layout>
  )
}
// Step 3: Export your component
export default AboutPage