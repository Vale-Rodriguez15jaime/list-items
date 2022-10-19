import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#549BB3'
    },
    secondary: {
      main: '#8FB4C1'
    },
    error: {
      main: '#DA4D46'
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: 16
        }
      }
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          fontSize: 16
        }
      }
    }
  },
  typography: {
    fontFamily: 'Montserrat',
    button: {
      textTransform: 'none'
    }
  }
})

export default theme
