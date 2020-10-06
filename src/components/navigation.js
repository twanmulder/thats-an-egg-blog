import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"

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

const StyledNavWrapper = styled.div`
  background: var(--navBackground);
  transition: var(--theme-transition);
  box-shadow: var(--navBoxShadow);
`

const StyledNavigation = styled.nav`
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

const StyledList = styled.ul`
  display: flex;
  margin: 0;
  list-style: none;
`

const StyledListItem = styled.li`
  margin: 0;
  padding-right: ${rhythm(0.75)};

  &:not(:last-child) {
  }

  @media (min-width: 768px) {
    padding-right: ${rhythm(1.5)};
  }
`

export default function Navigation() {
  return (
    <StyledNavWrapper>
      <StyledNavigation>
        <Link to="/" aria-label="Go back to the homepage">
          <StaticQuery
            query={logoQuery}
            render={data => {
              return (
                <Image
                  fixed={data.avatar.childImageSharp.fixed}
                  alt="That's an Egg logo, a fried egg in a pan"
                  style={{ display: `block` }}
                />
              )
            }}
          />
          <p>That's an Egg</p>
        </Link>
        <StyledList>
          <StyledListItem>
            <Link to="/about">About</Link>
          </StyledListItem>
          <StyledListItem>
            <Link to="/newsletter">Newsletter</Link>
          </StyledListItem>
        </StyledList>
        <DarkmodeToggle />
      </StyledNavigation>
    </StyledNavWrapper>
  )
}
