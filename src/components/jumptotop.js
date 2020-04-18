import React from "react"
import styled from "styled-components"

import { rhythm } from "../utils/typography"

const StyledButton = styled.button`
  position: fixed;
  right: ${rhythm(1.5)};
  bottom: ${rhythm(1.5)};
  width: ${rhythm(2)};
  height: ${rhythm(2)};
  background: #fec150;
  box-shadow: none;
  border-radius: 100%;
  text-align: center;
  color: #fff;
  font-size: ${rhythm(1)};
  font-weight: 900;
  line-height: ${rhythm(2)};
  border: 0;
  transform: translateY(${rhythm(5)});
  transition: 0.3s transform ease-in-out;
  will-change: transform;

  &:hover {
    background: rgba(254, 193, 80, 0.9);
  }

  &.in-view {
    transform: translateY(0);
  }

  &:focus {
    outline: 0;
  }
`

export default class JumpToTop extends React.Component {
  constructor(props) {
    super(props)
    this.state = { inView: false }

    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll)
  }

  handleScroll() {
    if (!this.state.inView && document.documentElement.scrollTop > 500) {
      this.setState({ inView: true })
    }
    if (this.state.inView && document.documentElement.scrollTop <= 500) {
      this.setState({ inView: false })
    }
  }

  handleClick() {
    window.scrollTo(0, 0)
  }

  render() {
    const inView = this.state.inView
    return (
      <StyledButton className={inView && "in-view"} onClick={this.handleClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-arrow-up"
        >
          <line x1="12" y1="19" x2="12" y2="5"></line>
          <polyline points="5 12 12 5 19 12"></polyline>
        </svg>
      </StyledButton>
    )
  }
}
