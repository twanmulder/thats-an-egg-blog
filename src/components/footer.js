import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { rhythm } from "../utils/typography"

const StyledFooter = styled.footer`
  margin-top: ${rhythm(1.5)};
`

export default function Footer() {
  return (
    <StyledFooter>
      <p>
        <a
          href="https://twitter.com/toktoktwan"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
        &nbsp;•&nbsp;
        <a
          href="https://github.com/twanmulder"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        &nbsp;•&nbsp;
        <Link to="/privacypolicy">Privacy Policy</Link>
      </p>
    </StyledFooter>
  )
}
