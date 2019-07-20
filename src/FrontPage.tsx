import { Typography } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledDiv = styled.div``

export default () => {
  return (
    <StyledDiv>
      <Typography variant="headline" gutterBottom={true} style={{ textAlign: 'center' }}>
        Namn och öknamn <br />
        på politiska partier och personer i Sverige
      </Typography>
      <Typography variant="subheading" gutterBottom={true} style={{ textAlign: 'center' }}>
        Av Gösta Langenfelt
      </Typography>

      <Typography variant="body1" gutterBottom={true} style={{ paddingTop: '10px' }}>
        Boken <em>Namn och öknamn på politiska partier och personer i Sverige</em> gavs ut 1935 i
        serien <em>Studentföreningen Verdandis småskrifter</em> (Nr 373). I boken avhandlar
        författaren Gösta Langenfelt smeknamn och tillmälen som använts inom svensk politik från
        1700-talet fram tills 1930-talet. Studentföreningen{' '}
        <a href="https://sv.wikipedia.org/wiki/F%C3%B6reningen_Verdandi">Verdandi</a> i Uppsala
        grundades 1882 och utgav 1888-1954 en serie småskrifter som blev en viktig kanal för
        folkbildning i Sverige. Delar av Verdandis skrifter finns bevarade på Sveriges olika
        bibliotek och <a href="http://runeberg.org/tema/verdandi.html">projekt Runeberg</a> arbetar
        med att digitalisera hela serien. Detta projekt är ett led i detta digitaliseringsprojekt.
      </Typography>

      <Typography variant="body1" gutterBottom={true} style={{ paddingTop: '10px' }}>
        Detta verk skyddas enligt lagen om upphovsrätt (URL 1960:729). Boken återges här i
        digitaliserad form med tillstånd från Gustav Langenfelts barnbarn.
      </Typography>
    </StyledDiv>
  )
}
