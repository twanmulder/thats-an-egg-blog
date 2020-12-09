import React from "react"
import styled from "styled-components"

import Navigation from "./navigation"
import Footer from "./footer"

import { rhythm } from "../utils/typography"

const Wrapper = styled.div`
  min-height: 100vh;
`

const ContentWrapper = styled.div`
  margin: 0 auto;
  max-width: ${rhythm(24)};
  padding: ${rhythm(1.5)} ${rhythm(3 / 4)};

  &.wide {
    max-width: 1100px;
    padding: ${rhythm(1.5)} 1.3125rem;
  }

  &.full {
    max-width: none;
    padding: 0;
  }

  &.article {
    max-width: 1100px;
    padding: ${rhythm(1.5)} 1.3125rem;

    main {
      display: flex;
      flex-direction: row-reverse;
      justify-content: center;
      align-items: flex-start;
    }
  }

  @media (min-width: 768px) {
    min-height: calc(100vh - 140px);
  }
`

export default function Layout(props) {
  const { children } = props
  const hideFooter = props.hideFooter || false
  const wrapperFormat = props.wrapperFormat

  let contentWrapperClassName = ""
  if (wrapperFormat === "wide") {
    contentWrapperClassName = "wide"
  } else if (wrapperFormat === "full") {
    contentWrapperClassName = "full"
  } else if (wrapperFormat === "article") {
    contentWrapperClassName = "article"
  }

  return (
    <Wrapper>
      <Navigation navStyle={props.navStyle} />
      <ContentWrapper className={contentWrapperClassName}>
        <main>{children}</main>
      </ContentWrapper>
      {!hideFooter && <Footer />}
    </Wrapper>
  )
}
