import { useState } from 'react'
import Router from 'next/router'

import { Box, Input, Typography } from '@mui/material'
import { LoadingButton } from '@mui/lab'
import useStyles from './styles'

const SearchInput = () => {
  const [search, setSearch] = useState('')
  const [error, setError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const classes = useStyles()

  const handleChange = e => {
    error && setError(!error)
    setSearch(e.target.value)
  }

  const handleClick = () => {
    if (search !== '') {
      setIsLoading(true)
      Router.push({
        pathname: '/items',
        as: '/items',
        query: { search }
      })
      return
    }
    setError(!error)
  }
  return (
    <Box className={classes.wrapper}>
      <Typography color="primary" variant="h3">
        Do your search
      </Typography>
      <Input
        aria-label="inputSearch"
        name="inputSearch"
        data-testid="inputSearch"
        disabled={isLoading}
        error={error}
        onChange={handleChange}
        value={search}
        className={classes.input}
        variant="outlined"
        type="search"
      />
      <LoadingButton
        data-testid="submitSearch"
        loading={isLoading}
        onClick={handleClick}
        variant="contained"
      >
        Search
      </LoadingButton>
    </Box>
  )
}

export default SearchInput
