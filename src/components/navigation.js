import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"

import DarkmodeToggle from "./darkmodetoggle"

import { scale, rhythm } from "../utils/typography"

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
  justify-content: space-between;

  a {
    color: var(--textNormal);
  }
`

const StyledList = styled.ul`
  display: flex;
  margin: 0;
  list-style: none;
`

const StyledListItem = styled.li`
  margin: 0;

  &:not(:last-child) {
    padding-right: ${rhythm(0.75)};
  }

  @media (min-width: 768px) {
    &:not(:last-child) {
      padding-right: ${rhythm(1.5)};
    }
  }
`

export default function Navigation() {
  return (
    <StyledNavigation>
      <Link
        to="/"
        style={{
          ...scale(1.25),
          marginTop: 0,
          boxShadow: "none",
        }}
      >
        <span role="img">
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
        </span>
      </Link>
      <StyledList>
        <StyledListItem>
          <Link to="/about">About</Link>
        </StyledListItem>
        <StyledListItem>
          <Link to="/newsletter">Newsletter</Link>
        </StyledListItem>
        <DarkmodeToggle />
      </StyledList>
    </StyledNavigation>
  )
}
