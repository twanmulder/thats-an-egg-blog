import React from "react"
import styled from "styled-components"

import Navigation from "./navigation"
import Footer from "./footer"

import { rhythm } from "../utils/typography"

function Layout(props) {
  const { children } = props
  const hideFooter = props.hideFooter || false

  return (
    <Wrapper>
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)} `,
        }}
      >
        <Navigation />
        <main>{children}</main>
        {!hideFooter && <Footer />}
      </div>
    </Wrapper>
  )
}

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

export default Layout
