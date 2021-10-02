import React from "react"
import { useHistory } from "react-router-dom"
import {
  AppBar,
  Button,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"

const useStyles = makeStyles({
  toolbar: {
    display: "flex",
    justifyContent: "space-between"
  },
  toolbarSection: {
    display: "flex",
    alignItems: "center",
  },
  menuButton: {
    marginRight: "1rem",
  },
})

const Navbar = (): JSX.Element => {
  const history = useHistory()
  const classes = useStyles()
  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <div className={classes.toolbarSection}>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">
            My Cool App
          </Typography>
        </div>
        <div className={classes.toolbarSection}>
          <Button onClick={() => history.push("/todo")} color="inherit">View To-Do's</Button>
        </div>
      </Toolbar>
    </AppBar>
  )
}
export default Navbar
