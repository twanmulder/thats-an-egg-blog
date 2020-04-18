import React from "react"
import styled from "styled-components"

import Navigation from "./navigation"
import Footer from "./footer"

import { rhythm } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { children } = this.props

    return (
      <Wrapper>
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(24),
            padding: `${rhythm(4.5)} ${rhythm(3 / 4)}`,
          }}
        >
          <Navigation />
          <main>{children}</main>
          <Footer />
        </div>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  min-height: 100vh;
`

export default Layout
