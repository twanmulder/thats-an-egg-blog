import React from "react"
import styled from "styled-components"

import Navigation from "./navigation"
import Footer from "./footer"

import { rhythm } from "../utils/typography"

const Wrapper = styled.div`
  min-height: 100vh;

  iframe {
    width: 100%;
  }
  @media (min-width: 1024px) {
    iframe {
      width: 150%;
      margin-left: -10rem;
      margin-right: -10rem;
    }
  }
`

const ContentWrapper = styled.div`
  margin: 0 auto;
  max-width: ${rhythm(24)};
  padding: ${rhythm(1.5)} ${rhythm(3 / 4)};

  @media (min-width: 768px) {
    min-height: calc(100vh - 140px);
  }
`

export default function Layout(props) {
  const { children } = props
  const hideFooter = props.hideFooter || false

  return (
    <Wrapper>
      <Navigation />
      <ContentWrapper>
        <main>{children}</main>
      </ContentWrapper>
      {!hideFooter && <Footer />}
    </Wrapper>
  )
}
