import { useRouter } from 'next/router'
import { Grid } from '@mui/material'

import CardItem from 'components/cardItem'
import useStyles from './styles'

const ListItems = () => {
  const classes = useStyles()
  const router = useRouter()
  console.log('router', router.query)
  return (
    <Grid
      className={classes.listContainer}
      container
      rowSpacing={2}
      columnSpacing={{ xs: 1, sm: 4, md: 3 }}
    >
      {[...Array(20).keys()].map(item => {
        return (
          <Grid key={item} item>
            <CardItem />
          </Grid>
        )
      })}
    </Grid>
  )
}

export default ListItems
