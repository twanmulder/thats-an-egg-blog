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
        fixed(width: 75, height: 75) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

const StyledNavigation = styled.nav`
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
    box-shadow: none;
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
  )
}
