import React from "react"
import { makeStyles, Typography } from "@material-ui/core"
import home from "../assets/home.svg"

// Styles
const useStyles = makeStyles({
  root: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },
})

// HomePage coponent
const HomePage = (): JSX.Element => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Typography variant="h1" component="h1">Welcome Home</Typography>
      <img src={home} />
    </div>
  )
}
export default HomePage
