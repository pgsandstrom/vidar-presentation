import { Typography } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div``

export default () => {
  return (
    <StyledDiv>
      <Typography variant="headline" gutterBottom={true} style={{ textAlign: 'center' }}>
        Ett projekt i digitalisering
      </Typography>

      <Typography variant="body1" gutterBottom={true} style={{ paddingTop: '10px' }}>
        Digitaliseringen av denna bok har utförts som ett projektarbete via studier vid högskolan i
        Borås. Syftet har varit att lära sig att hur digitalisering av vårt kulturarv går till och
        praktiskt genomföra det. För att långsiktigt bevara den här digitaliseringen finns den även
        tillgänglig via <a href="http://runeberg.org/nonpp/1935/">Projekt Runeberg</a> som är ett
        digitalt bibliotek som arbetar på frivillig grund med att skapa fria elektroniska utgåvor av
        klassisk nordisk litteratur och göra dem öppet tillgängliga över Internet.
      </Typography>

      <Typography variant="body1" gutterBottom={true} style={{ paddingTop: '10px' }}>
        Digitaliseringen finns tillgänglig att ladda ned som PDF, TIFF och TEI via denna hemsida,
        men var uppmärksam på att boken fortfarande omfattas av upphovsrätten och får inte
        reproduceras utan tillstånd från upphovsrättsinnehavaren.
      </Typography>

      <Typography variant="body1" gutterBottom={true} style={{ paddingTop: '10px' }}>
        Jag som har utfört digitaliseringen heter Vidar Kjerstadius och om du vill komma i kontakt
        med mig är jag tillgänglig på:{' '}
        <a href="mailto:vidar.kjerstadius@gmail.com">vidar.kjerstadius@gmail.com</a>
      </Typography>

      <Typography variant="body1" gutterBottom={true} style={{ paddingTop: '10px' }}>
        Stort tack till Code & Stuff AB som hjälpt mig att skapa den här hemsidan.
      </Typography>
    </StyledDiv>
  )
}
