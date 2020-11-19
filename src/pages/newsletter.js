import React from "react"
import styled from "styled-components"

import { rhythm } from "../utils/typography"

import Layout from "../components/layout"
import Hero from "../components/hero"
import NewsletterForm from "../components/newsletterform"

const Wrapper = styled.section`
  position: relative;
  background: var(--navBackground);
  border-radius: 1rem;
  padding: 60px 80px;
  margin: ${rhythm(3)} auto;
  max-width: 800px;
  box-shadow: 0 20px 15px -15px rgba(40, 45, 51, 0.05);

  @media (max-width: 767px) {
    border-radius: 0;
    padding: 40px 20px 20px 20px;
  }
`

function Newsletter() {
  const title = "Newsletter"
  const subtitle = "Want to stay in-touch about new articles and tools/products I build?"

  return (
    <Layout wrapperFormat="full" navStyle="hero">
      <Hero title={title} subtitle={subtitle} hideImage={true} />
      <Wrapper>
        <NewsletterForm />
      </Wrapper>
    </Layout>
  )
}

export default Newsletter
