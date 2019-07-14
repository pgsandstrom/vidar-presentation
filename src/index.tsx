import React from 'react'
import ReactDOM from 'react-dom'

import CssBaseline from '@material-ui/core/CssBaseline'

import styled from 'styled-components'
import * as serviceWorker from './serviceWorker'

import './global.css'

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import App from './App'

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#4849e9',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      // light: '#0066ff',
      main: '#e94849',
      // dark: will be calculated from palette.secondary.main,
      // contrastText: '#ffcc00',
    },
    // error: will use the default color
  },
})

const StyledDiv = styled.div`
  height: 100%;
  width: 100%;
`

const Everything = () => (
  <StyledDiv>
    <CssBaseline />
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </StyledDiv>
)

ReactDOM.render(<Everything />, document.getElementById('root') as HTMLElement)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
