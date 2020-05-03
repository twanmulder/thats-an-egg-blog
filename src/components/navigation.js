import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import DarkmodeToggle from "./darkmodetoggle"

import { scale, rhythm, bodyColor } from "../utils/typography"

const StyledNavigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    color: ${bodyColor};
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
    padding-right: ${rhythm(1.5)};
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
        <span role="img" aria-label="egg cooking emoji">
          🍳
        </span>
      </Link>
      <StyledList>
        <StyledListItem>
          <Link to="/newsletter">Newsletter</Link>
        </StyledListItem>
        <StyledListItem>
          <Link to="/blog">Writing</Link>
        </StyledListItem>
        <DarkmodeToggle />
      </StyledList>
    </StyledNavigation>
  )
}
