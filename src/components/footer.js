import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { rhythm } from "../utils/typography"

const StyledFooter = styled.div`
  color: var(--buttonColor);
  text-align: center;
  background: var(--footerBackground);
  box-shadow: var(--footerBoxShadow);
  transition: var(--theme-transition);

  footer {
    display: flex;
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 1.3125rem;
  }

  .home-anchor {
    font-family: "Montserrat", sans-serif;
    font-weight: 900;
    font-size: 1.5rem;
    line-height: 1.1;

    :hover {
      box-shadow: none;
    }
  }

  @media (min-width: 768px) {
    text-align: left;

    footer {
      justify-content: space-between;
      align-items: center;
      height: 70px;
    }
  }
`
const FooterLinks = styled.div`
  display: flex;
  align-items: center;

  a {
    margin: 0 ${rhythm(0.5)};
  }
`

export default function Footer() {
  return (
    <StyledFooter>
      <footer>
        <Link to="/" className="home-anchor">
          That's an Egg
        </Link>
        <FooterLinks>
          <a
            href="https://twitter.com/toktoktwan"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://github.com/twanmulder"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <Link to="/privacypolicy">Privacy Policy</Link>
          <Link to="/rss.xml">RSS</Link>
        </FooterLinks>
      </footer>
    </StyledFooter>
  )
}
