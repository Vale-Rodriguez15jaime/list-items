import { makeStyles } from '@mui/styles'
const useStyles = makeStyles(() => ({
  wrapper: {
    background: '#549BB3',
    display: 'flex',
    alignItems: 'center',
    height: '5rem'
  },
  logo: {
    cursor: 'pointer'
  },
  title: {
    color: 'white',
    marginTop: '0.5rem'
  }
}))

export default useStyles
