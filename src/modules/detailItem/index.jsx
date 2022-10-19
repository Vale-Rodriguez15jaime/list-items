import { Box, Typography, Container } from '@mui/material'
import useStyles from './styles'

const DetailItem = ({ data = null }) => {
  const classes = useStyles()
  return (
    <Container>
      {data && (
        <>
          <Box className={classes.title}>
            <Typography variant="h2">{data.title}</Typography>
          </Box>
          <Box className={classes.imageContainer}>
            <img className={classes.image} alt="detail" src={data.image_url} />
          </Box>
          <Typography variant="body1" gutterBottom>
            {data.description}
          </Typography>
        </>
      )}
    </Container>
  )
}

export default DetailItem
