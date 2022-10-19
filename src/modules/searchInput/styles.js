import { makeStyles } from '@mui/styles'
const useStyles = makeStyles(() => ({
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '3rem'
  },
  input: {
    width: '22rem',
    margin: '2rem 0'
  }
}))

export default useStyles
