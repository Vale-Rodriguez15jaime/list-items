import { makeStyles } from '@mui/styles'
const useStyles = makeStyles(() => ({
  title: {
    display: 'flex',
    justifyContent: 'center',
    margin: '2rem 0'
  },
  imageContainer: {
    width: '100%',
    height: '20rem',
    marginBottom: '2rem'
  },
  image: {
    objectFit: 'cover',
    width: '100%',
    height: '100%'
  }
}))

export default useStyles
