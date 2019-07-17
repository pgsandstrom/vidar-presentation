import { Paper } from '@material-ui/core'
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import FrontPage from './FrontPage'
import ImageShower from './ImageShower'

const StyledDiv = styled.div`
  height: 100%;
  background: gray;
  padding: 20px 0;

  .main {
    background: white;
    width: 1680px;
    margin: 0 auto;
    padding: 20px;
  }
`

export default () => {
  return (
    <StyledDiv>
      <Paper className="main">
        <Switch>
          <Route path="/" component={FrontPage} exact={true} />
          <Route path="/images" component={ImageShower} exact={true} />
          <Route path="/images/:page" component={ImageShower} />
        </Switch>
      </Paper>
    </StyledDiv>
  )
}
