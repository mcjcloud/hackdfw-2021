import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import home from "../assets/home.svg";
import GroupItem from "../components/GroupItem";
import { Group } from "../models";

// Styles
const useStyles = makeStyles({
  root: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },
  groups: {
    width: "90%",
    margin: "10px",
    alignItems: "center",
  },
});

// HomePage coponent
const HomePage = (): JSX.Element => {
  const classes = useStyles();
  const groups: Group[] = [
    {
      groupName: "Bipolar Sunshine",
      groupDescription: "Friends of those who are a bit bipolar",
      members: ["123", "456"],
      guid: "123",
      schedule: [
        {
          date: new Date(2020, 1, 1),
          name: "Happy Meeting Workshop",
          details: "We will code",
          guid: "178",
          organizers: ["123"],
          participants: ["456"],
          location: "somewere",
        },
      ],
      channels: [],
      avatar: "/src/assets/home.svg",
    },
    {
      groupName: "Subtract ADD",
      groupDescription: "Come hang out with us, we are a bit around",
      members: ["123", "456"],
      avatar: "/src/assets/home.svg",

      guid: "123",
      schedule: [
        {
          date: new Date(2020, 1, 1),
          name: "Happy Meeting Workshop",
          details: "We will code",
          guid: "179",
          organizers: ["123"],
          participants: ["456"],
          location: "somewere",
        },
        {
          date: new Date(2020, 1, 1),
          name: "Happy Meeting Workshop",
          location: "Somewhere",
          details: "We will code",
          guid: "180",
          organizers: ["123"],
          participants: ["456"],
        },
      ],
      channels: [],
    },
  ];
  return (
    <React.Fragment>
      {groups.map((group, i) => (
        <div key={`group_${i}`} className={classes.groups}>
          <GroupItem group={group} />
        </div>
      ))}
    </React.Fragment>
  );
};
export default HomePage;
