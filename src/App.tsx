import { Paper } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Toolbar from '@material-ui/core/Toolbar'
import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import AboutPage from './AboutPage'
import DownloadPage from './DownloadPage'
import FrontPage from './FrontPage'
import ImageShower from './ImageShower'

const StyledDiv = styled.div`
  height: 100%;

  .main-paper {
    background: white;
    //background-image: url(/img/bakgrund2.jpg);
    //background-size: cover;
    width: 1280px;
    margin: 20px auto;
    padding: 40px;
  }
`

const StyledToolbarContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1 0 0;

  > a {
    margin-right: 48px;
  }

  > * {
    margin-top: 10px;
    margin-bottom: 10px;
  }

  > .button-row {
    display: flex;
    justify-content: center;

    > * {
      margin: 0 20px;
    }
  }
`

export default () => {
  const isOldBrowser = !!(window as any).MSInputMethodContext && !!(document as any).documentMode

  return (
    <StyledDiv>
      <AppBar position="static">
        <Toolbar>
          <StyledToolbarContent>
            <Link to="/">
              <Button color="secondary" variant="outlined">
                Startsida
              </Button>
            </Link>
            <div className="button-row">
              <Link to="/images">
                <Button color="secondary" variant="outlined">
                  Boken
                </Button>
              </Link>
              <Link to="/about">
                <Button color="secondary" variant="outlined">
                  Om projektet
                </Button>
              </Link>
              <Link to="/download">
                <Button color="secondary" variant="outlined">
                  Nedladdning
                </Button>
              </Link>
            </div>
            {isOldBrowser && (
              <div>
                Varning! Du använder en gammal webbläsare! För bästa läsupplevelse ladda ner en
                modern webbläsare såsom{' '}
                <a href="https://www.mozilla.org/sv-SE/firefox/new/">Firefox</a> eller{' '}
                <a href="https://www.google.se/chrome/index.html">Chrome</a> och använd den
                istället.
              </div>
            )}
          </StyledToolbarContent>
        </Toolbar>
      </AppBar>
      <Paper className="main-paper">
        <Switch>
          <Route path="/" component={FrontPage} exact={true} />
          <Route path="/about" component={AboutPage} exact={true} />
          <Route path="/download" component={DownloadPage} exact={true} />
          <Route path="/images" component={ImageShower} exact={true} />
          <Route path="/images/:page" component={ImageShower} />
        </Switch>
      </Paper>
    </StyledDiv>
  )
}
