import React, { useState, useEffect } from "react"
import styled from "styled-components"

import { rhythm } from "../utils/typography"

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  right: ${rhythm(1.5)};
  bottom: ${rhythm(1.5)};
  width: ${rhythm(2)};
  height: ${rhythm(2)};
  color: #fff;
  background: #fec150;
  text-align: left;
  border-radius: 100%;
  border: 0;
  cursor: pointer;
  transform: translateY(${rhythm(5)});
  transition: 0.3s transform ease-in-out;
  will-change: transform;

  &:hover {
    background: #ffc761;
  }

  &.in-view {
    transform: translateY(0);
  }

  &:focus {
    outline: 0;
  }
`

function JumpToTop() {
  const [inView, setInView] = useState(false)

  const handleScroll = () => {
    if (!inView && document.documentElement.scrollTop > 500) {
      setInView(true)
    }
    if (inView && document.documentElement.scrollTop <= 500) {
      setInView(false)
    }
  }

  const handleClick = () => {
    window.scrollTo(0, 0)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  })

  return (
    <StyledButton className={inView && "in-view"} onClick={handleClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-arrow-up"
      >
        <line x1="12" y1="19" x2="12" y2="5"></line>
        <polyline points="5 12 12 5 19 12"></polyline>
      </svg>
    </StyledButton>
  )
}

export default JumpToTop
