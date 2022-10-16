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
      Router.push('/items', `/items?search=${search}`)
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
        disabled={isLoading}
        error={error}
        onChange={handleChange}
        value={search}
        className={classes.input}
        variant="outlined"
        type="search"
      />
      <LoadingButton loading={isLoading} onClick={handleClick} variant="contained">
        Search
      </LoadingButton>
    </Box>
  )
}

export default SearchInput
