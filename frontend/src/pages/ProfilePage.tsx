import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, IconButton, makeStyles, Typography } from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";
import blogger from "../assets/blogger.png";

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
  const ProfilePage = (): JSX.Element => {
    const classes = useStyles()
    return (
      <div className={classes.root}>
        <Typography variant="h1" component="h1">Melonie Matters</Typography>
        <img src={blogger}/>
      </div>
      
    )
  }
  export default ProfilePage
  