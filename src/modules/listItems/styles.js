import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(() => ({
  listContainer: {
    overflowY: 'scroll',
    padding: '1rem 0',
    maxHeight: '91vh',
    display: 'flex',
    justifyContent: 'center',
    marginTop: '1rem'
  },
  title: {
    color: 'white',
    marginTop: '0.5rem'
  }
}))

export default useStyles
