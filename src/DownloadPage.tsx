import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div``

export default () => {
  return (
    <StyledDiv>
      <div>
        <a href="/download/Namn och öknamn - pdf.pdf">Hela boken i Pdf format</a>
      </div>

      <div style={{ paddingTop: '20px' }}>
        <a href="/download/Namn och öknamn - TIFF.zip">Alla orginalbilder i TIFF format</a>
      </div>

      <div style={{ paddingTop: '20px' }}>
        <a href="/download/Namn och öknamn - TEI.xml">
          Boken i XML enligt TEI (Text Encoding Initiative)
        </a>
      </div>
    </StyledDiv>
  )
}
