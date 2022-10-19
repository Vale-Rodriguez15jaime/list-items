import {
  Button,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Card
} from '@mui/material'

const CardItem = ({ onClick, item }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="140" image={item.image_url} alt="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
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
