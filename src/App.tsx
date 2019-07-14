import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
  height: 100%;
  background: gray;
  padding: 20px 0;

  main {
    background: white;
    height: 800px;
    width: 1680px;
    margin: 0 auto;
  }
`

export default () => {
  return (
    <StyledDiv>
      <main>hejsan</main>
    </StyledDiv>
  )
}
