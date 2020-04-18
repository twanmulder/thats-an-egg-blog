import React from "react"
import styled from "styled-components"

import { rhythm } from "../utils/typography"

const StyledButton = styled.button`
  position: fixed;
  right: ${rhythm(1.5)};
  bottom: -${rhythm(3)};
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
  transition: 0.3s bottom ease-in-out;

  &:hover {
    background: rgba(254, 193, 80, 0.9);
  }

  &.in-view {
    bottom: ${rhythm(1.5)};
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
        ↑
      </StyledButton>
    )
  }
}
