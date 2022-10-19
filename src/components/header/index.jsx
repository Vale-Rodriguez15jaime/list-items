import Router from 'next/router'
import { Box } from '@mui/material'

import Logo from 'assets/logo'
import useStyles from './styles'

const Header = ({ currentPosition }) => {
  const classes = useStyles()
  return (
    <Box className={classes.wrapper}>
      <Box className={classes.logo} onClick={() => Router.push('/')}>
        <Logo />
      </Box>
      <div className={classes.title}>{currentPosition}</div>
    </Box>
  )
}

Header.defaultProps = {
  currentPosition: 'List'
}

export default Header
