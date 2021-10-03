import React from "react";
import { Link, useHistory } from "react-router-dom";
import {
  AppBar,
  Button,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import "./Navbar.scss"
import logoSmall from "../../assets/mm-logo-small.png";

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
    <AppBar position="static" className="navbar-main-header">
      <Toolbar className={classes.toolbar}>
        <div className={classes.toolbarSection}>
          <Typography className="site-name" variant="h6">
            <Link className="logo-text" to="/signup">
              <l>M</l>ELON
              <img src={logoSmall} />
              <l>M</l>ENTOR
            </Link>
          </Typography>
        </div>
        <div className={classes.toolbarSection}>
          <Button onClick={() => history.push("/signup")} color="inherit">CREATE ACCOUNT</Button>

        </div>
      </Toolbar>
    </AppBar>
  )
}
export default Navbar
