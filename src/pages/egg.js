import React from "react"
import styled from "styled-components"

const StyledEgg = styled.main`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10vw;
  background: #fec150;
`

export default function Egg() {
  return (
    <StyledEgg>
      <span role="img" aria-label="egg cooking emoji">
        🍳
      </span>
    </StyledEgg>
  )
}
