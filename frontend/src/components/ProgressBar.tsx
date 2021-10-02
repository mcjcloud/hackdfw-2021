import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import {
  AppBar,
  Avatar,
  Button,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

import { Group, Member } from "../models";

const useStyles = makeStyles({
  wrapper: {
    display: "flex",
    justifyContent: "space-around",
    border: "6px solid #e0e0e0",
    borderRadius: "45px",
  },
  avatar: {
    width: "120px",
    height: "120px",
  },
  arrow: {
    // margin: 0,
    // top: "50%",
    // "-ms-transform": "translateY(-50%)",
    // transform: "translateY(-50%)",
    // position: "absolute",
    // left: "100%",
  },
  arrowWrapper: {
    position: "relative",
    display: "flex",
  },
  stepWrapper: {
    flex: 1,
    display: "flex",
    alignItems: "center",
  },
  arrowIconWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});

interface Props {
  stage: "Sign Up" | "Your Profile" | "Matches" | "Join" | "Engage";
}
const ProgressBar = (props: Props): JSX.Element => {
  const classes = useStyles();
  const stage = props.stage;
  const location = useLocation();
  return (
    <div className={classes.wrapper}>
      <Grid container spacing={2}>
        <div className={classes.stepWrapper}>
          <Avatar
            style={{
              backgroundColor: location.pathname.includes("signup")
                ? "blue"
                : "black",
            }}
            className={classes.avatar}
          >
            Sign Up
          </Avatar>
          <div className={classes.arrowIconWrapper}>
            <ArrowRightAltIcon className={classes.arrow} />
          </div>
        </div>
        <div className={classes.stepWrapper}>
          <Avatar
            style={{
              backgroundColor: location.pathname.includes("details")
                ? "blue"
                : "black",
            }}
            className={classes.avatar}
          >
            My Profile
          </Avatar>
          <div className={classes.arrowIconWrapper}>
            <ArrowRightAltIcon className={classes.arrow} />
          </div>
        </div>
        <div className={classes.stepWrapper}>
          <Avatar
            style={{
              backgroundColor: location.pathname.includes("signup")
                ? "blue"
                : "black",
            }}
            className={classes.avatar}
          >
            Sign Up
          </Avatar>
          <div className={classes.arrowIconWrapper}>
            <ArrowRightAltIcon className={classes.arrow} />
          </div>
        </div>
        <div className={classes.stepWrapper}>
          <Avatar
            style={{
              backgroundColor: location.pathname.includes("signup")
                ? "blue"
                : "black",
            }}
            className={classes.avatar}
          >
            Sign Up
          </Avatar>
          <div className={classes.arrowIconWrapper}>
            <ArrowRightAltIcon className={classes.arrow} />
          </div>
        </div>
        <div className={classes.stepWrapper}>
          <Avatar
            style={{
              backgroundColor: location.pathname.includes("signup")
                ? "blue"
                : "black",
            }}
            className={classes.avatar}
          >
            Sign Up
          </Avatar>
        </div>
      </Grid>
    </div>
  );
};
export default ProgressBar;
