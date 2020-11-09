import React, { useState } from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import styled, { createGlobalStyle } from "styled-components"

import DarkmodeToggle from "./darkmodetoggle"

import { rhythm } from "../utils/typography"

const logoQuery = graphql`
  query LogoQuery {
    avatar: file(absolutePath: { regex: "/egg.png/" }) {
      childImageSharp {
        fixed(width: 50, height: 50, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

const Header = styled.header`
  background: var(--navBackground);
  transition: var(--theme-transition);
  box-shadow: var(--navBoxShadow);

  &.hero {
    background: #fec150;
    box-shadow: none;

    a {
      color: #1a1103;

      @media (max-width: 768px) {
        color: var(--textNormal);
      }
    }

    button {
      color: var(--navMobileButtonColor);

      &.is-active {
        color: var(--navMobileButtonColorOpen);
      }
    }

    .slider {
      border: 1px solid #1a1103;
      background-color: #fec150;
    }
  }
`

const Nav = styled.nav`
  position: sticky;
  top: 0;
  height: 70px;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1.3125rem;
  z-index: 2;

  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-wrap: wrap;

  a {
    color: var(--textNormal);
    margin-top: 0px;
    margin-right: auto;
  }

  > a {
    display: flex;
    align-items: center;
    box-shadow: none;
    z-index: 101;

    p {
      display: none;
      font-family: Montserrat, sans-serif;
      margin: 0 0 0 1rem;
      font-weight: 900;
      font-size: 1.5rem;
      line-height: 1.1;

      @media (min-width: 768px) {
        display: inline-block;
      }
    }
  }
`

const DesktopList = styled.ul`
  display: flex;
  align-items: center;
  margin: 0;
  list-style: none;

  @media (max-width: 767px) {
    display: none;
  }
`

const DesktopListItem = styled.li`
  margin: 0;
  padding-right: ${rhythm(0.75)};

  &:not(:last-child) {
  }

  @media (min-width: 768px) {
    padding-right: ${rhythm(1.5)};
  }
`

const MobileNavToggle = styled.button`
  display: none;
  color: var(--textNormal);
  cursor: pointer;
  appearance: none;
  border: 0;
  border-radius: 0;
  line-height: normal;
  background-color: transparent;
  padding: 1rem;
  transition: color 0.12s cubic-bezier(0.455, 0.03, 0.515, 0.955);

  :focus {
    outline: none;
  }

  .toggle__icon {
    display: block;
    width: 1.5rem;
    height: 1.5rem;
    position: relative;
  }

  .toggle__icon__line {
    display: block;
    width: 1.25rem;
    height: 0.125rem;
    border-radius: 9999px;
    background-color: currentColor;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0.125rem;
    z-index: 101;
    transition: all 0.12s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  .toggle__icon__line--top {
    top: 0.4375rem;
  }

  .toggle__icon__line--bottom {
    bottom: 0.4375rem;
  }

  &.is-active {
    .toggle__icon__line--top {
      top: 0.6875rem;
      transform: rotate(45deg);
    }
    .toggle__icon__line--bottom {
      bottom: 0.6875rem;
      transform: rotate(-45deg);
    }
  }

  @media (max-width: 767px) {
    display: block;
  }
`

const MobileNav = styled.nav`
  display: none;
  position: fixed;
  overflow: hidden;
  top: 0;
  left: 0px;
  right: 0px;
  height: 0;
  z-index: 100;
  background: var(--navBackground);
  transition: all 0.5s ease;

  &.is-active {
    height: 100vh;

    ul {
      opacity: 1;
      transition-delay: 0.3s;
    }
  }

  ul {
    list-style: none;
    margin: 0;
    text-align: center;
    opacity: 0;
    transition: all 0.2s ease;
    transition-delay: 0s;
  }

  li a {
    font-size: ${rhythm(1)};
  }

  @media (max-width: 767px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

const GlobalStyle = createGlobalStyle`
  html {
    overflow: ${props => (props.hideOverflow ? "hidden" : "inherit")}
  }
`

export default function Navigation(props) {
  const [isNavOpen, updateNavOpenState] = useState(false)
  const isMobile = window.innerWidth <= 768
  const { navStyle } = props
  const navigationClassName = navStyle === "hero" ? "hero" : ""

  const handleToggleNav = () => {
    updateNavOpenState(!isNavOpen)
  }

  return (
    <Header className={navigationClassName}>
      <GlobalStyle hideOverflow={isNavOpen} />
      <Nav>
        <Link to="/" aria-label="Go back to the homepage">
          <StaticQuery
            query={logoQuery}
            render={data => {
              return <Image fixed={data.avatar.childImageSharp.fixed} alt="That's an Egg logo, a fried egg in a pan" style={{ display: `block` }} />
            }}
          />
          <p>That's an Egg</p>
        </Link>
        <DesktopList>
          <DesktopListItem>
            <Link to="/about">About</Link>
          </DesktopListItem>
          <DesktopListItem>
            <Link to="/newsletter">Newsletter</Link>
          </DesktopListItem>
          {isMobile ? null : <DarkmodeToggle />}
        </DesktopList>
        <MobileNavToggle onClick={handleToggleNav} className={isNavOpen ? "is-active" : null} aria-expanded={isNavOpen} title="Toggle Menu">
          <span className="toggle__icon">
            <span className="toggle__icon__line toggle__icon__line--top"></span>
            <span className="toggle__icon__line toggle__icon__line--bottom"></span>
          </span>
          <span className="visuallyhidden">Toggle menu</span>
        </MobileNavToggle>
        <MobileNav className={isNavOpen ? "is-active" : null}>
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/newsletter">Newsletter</Link>
            </li>
            <li>{isMobile ? <DarkmodeToggle /> : null}</li>
          </ul>
        </MobileNav>
      </Nav>
    </Header>
  )
}
