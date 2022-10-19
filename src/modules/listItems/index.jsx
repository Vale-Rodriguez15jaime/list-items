import { useReducer, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Grid, CircularProgress, Box, Typography } from '@mui/material'

import CardItem from '../../components/cardItem'
import useStyles from './styles'
import { initialState, reducer } from './reducer'
import { getList } from './actions'

const ListItems = () => {
  const classes = useStyles()
  const router = useRouter()
  const [state, dispatch] = useReducer(reducer, initialState)
  const search = router.query.search || ''
  const { isLoading, data } = state

  useEffect(() => {
    if (search !== '') {
      getList({ search, page_size: 4 }, dispatch).then()
    }
  }, [search])

  const handleClickLearnMore = id => {
    router.push('/items/[id]', `/items/${id}`)
  }

  return (
    <div data-testid={`listSearch-${search}`}>
      {isLoading && (
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '4rem' }}>
          <CircularProgress />
        </Box>
      )}
      {!isLoading && data.length > 0 && (
        <Grid
          className={classes.listContainer}
          container
          rowSpacing={2}
          columnSpacing={{ xs: 1, sm: 4, md: 3 }}
        >
          {data.map(item => {
            return (
              <Grid key={item.id} item>
                <CardItem item={item} onClick={() => handleClickLearnMore(item.id)} />
              </Grid>
            )
          })}
        </Grid>
      )}
      {!isLoading && data.length === 0 && <Typography>Empty list</Typography>}
    </div>
  )
}

export default ListItems
