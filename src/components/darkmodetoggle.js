import React from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import styled from "styled-components"

import sun from "../../static/assets/icons/sun.svg"
import moon from "../../static/assets/icons/moon.svg"

const Label = styled.label`
  position: relative;
  display: inline-block;
  user-select: none;
  width: 65px;
  height: 34px;
`

const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  :checked + .slider {
    background: #fec150;

    ::before,
    ::after {
      transform: translateX(29px);
    }

    ::before {
      bottom: 4px;
      box-shadow: inset 1px -1px 0px 0px #f5f5f5;
    }

    ::after {
      box-shadow: inset -1px 1px 0px 0px #ef9220;
    }

    .moon-icon {
      opacity: 1;
      transform: translateX(0);
    }

    .sun-icon {
      opacity: 0;
      transform: translateX(-4px);
    }
  }
`

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 34px;
  background-color: #e6e6e6;
  transition: 0.3s;

  ::before,
  ::after {
    position: absolute;
    content: "";
    border-radius: 50%;
    transition: 0.25s;
  }

  ::before {
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 5px;
    background-color: #fff;
    box-shadow: inset 1px 1px 0px 0px #e6e6e6;
  }

  ::after {
    width: 11px;
    height: 11px;
    left: 13px;
    bottom: 14px;
    background-color: #fec150;
    box-shadow: inset -1px -1px 0px 0px #ef9220;
  }
`

const Icon = styled.img`
  position: absolute;
  margin: 0;
  transition: opacity 0.1s, transform 0.25s;

  &.moon-icon {
    opacity: 0;
    left: 9px;
    bottom: 9px;
    transform: translateX(4px);
  }

  &.sun-icon {
    opacity: 1;
    right: 10px;
    bottom: 9px;
    transform: translateX(0);
  }
`

function DarkmodeToggle() {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <Label>
          <Input
            type="checkbox"
            onChange={e => toggleTheme(e.target.checked ? "dark" : "light")}
            checked={theme === "dark"}
          />
          <Slider className="slider">
            <Icon
              src={moon}
              width="16"
              height="16"
              role="presentation"
              className={theme === "dark" ? "moon-icon -visible" : "moon-icon"}
              style={{ pointerEvents: "none" }}
            />
            <Icon
              src={sun}
              width="16"
              height="16"
              role="presentation"
              className={theme === "dark" ? "sun-icon" : "sun-icon -visible"}
              style={{ pointerEvents: "none" }}
            />
          </Slider>
        </Label>
      )}
    </ThemeToggler>
  )
}

export default DarkmodeToggle
