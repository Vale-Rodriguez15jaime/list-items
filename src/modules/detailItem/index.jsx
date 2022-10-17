import { Box, Typography, Container } from '@mui/material'
import useStyles from './styles'

const DetailItem = () => {
  const classes = useStyles()
  return (
    <Container>
      <Box className={classes.title}>
        <Typography variant="h2">Este es un titulo</Typography>
      </Box>
      <Box className={classes.imageContainer}>
        <img
          className={classes.image}
          alt="detail"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Portrait_of_an_Iguana.jpg/1280px-Portrait_of_an_Iguana.jpg"
        />
      </Box>
      <Typography variant="body1" gutterBottom>
        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis
        tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus,
        cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
        unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate
        numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.Lorem ipsum
        dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit,
        quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
        dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.Lorem ipsum dolor
        sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam
        beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos
        laborum fugiat deleniti? Eum quasi quidem quibusdam.Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae
        rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum
        fugiat deleniti? Eum quasi quidem quibusdam.Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat
        deleniti? Eum quasi quidem quibusdam.
      </Typography>
    </Container>
  )
}

export default DetailItem
