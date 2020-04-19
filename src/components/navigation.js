import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { scale, rhythm, bodyColor } from "../utils/typography"

const StyledNavigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
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

  a {
    color: ${bodyColor};
  }
`

export default class Navigation extends React.Component {
  render() {
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
            <Link to="/blog">Writing</Link>
          </StyledListItem>
        </StyledList>
      </StyledNavigation>
    )
  }
}
