import {
  Button,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Card
} from '@mui/material'

const CardItem = ({ onClick }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Portrait_of_an_Iguana.jpg/1280px-Portrait_of_an_Iguana.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000 species,
          ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={onClick && onClick} size="small">
          Learn More
        </Button>
      </CardActions>
    </Card>
  )
}

CardItem.defaultProps = {
  onClick: null
}

export default CardItem
