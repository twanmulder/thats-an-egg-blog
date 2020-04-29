import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { rhythm } from "../utils/typography"

const StyledFooter = styled.footer`
  margin-top: ${rhythm(1.5)};
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`

const RSSLink = styled.div`
  margin-top: ${rhythm(0.75)};

  @media (min-width: 768px) {
    margin-top: 0;
    float: right;
  }
`

export default function Footer() {
  return (
    <StyledFooter>
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
      <RSSLink>
        <Link to="/rss.xml">RSS</Link>
      </RSSLink>
    </StyledFooter>
  )
}
