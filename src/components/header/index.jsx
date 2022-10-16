import Logo from 'assets/logo'
import useStyles from './styles'

const Header = ({ currentPosition }) => {
  const classes = useStyles()
  return (
    <div>
      <div className={classes.wrapper}>
        <Logo />
        <div className={classes.title}>{currentPosition}</div>
      </div>
    </div>
  )
}

Header.defaultProps = {
  currentPosition: 'List'
}

export default Header
