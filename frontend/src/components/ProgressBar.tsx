import React from "react";
import { useHistory } from "react-router-dom";
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
});

const stages = ["Sign Up", "Your Profile", "Matches", "Join", "Engage"];

interface Props {
  stage: "Sign Up" | "Your Profile" | "Matches" | "Join" | "Engage";
}
const ProgressBar = (props: Props): JSX.Element => {
  const classes = useStyles();
  const stage = props.stage;
  return (
    <div className={classes.wrapper}>
      <Grid container spacing={2}>
        {stages.map((s, i) => (
          <div
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
            }}
          >
            {/* <Grid
              item
              xs={2}
              sm={2}
              md={2}
              key={i}
              className={classes.arrowWrapper}
            > */}
            <Avatar className={classes.avatar}>{stages[i]}</Avatar>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flex: 1 }}>
              <ArrowRightAltIcon className={classes.arrow} />
            </div>
            {/* </Grid> */}
          </div>
        ))}
      </Grid>
    </div>
  );
};
export default ProgressBar;
