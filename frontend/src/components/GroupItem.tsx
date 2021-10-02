import React from "react";
import { useHistory } from "react-router-dom";
import {
  AppBar,
  Avatar,
  Button,
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

const useStyles = makeStyles({
  wrapper: {
    display: "flex",
    justifyContent: "space-around",
    border: "6px solid #e0e0e0",
    borderRadius: "45px",
  },
  groupInfoWrapper: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    width: "30%",
  },
  groupTitle: {
    display: "flex",
  },
  groupDescription: {
    display: "flex",
  },
  groupMemberCount: {
    display: "flex",
  },
  scheduleWrapper: {
    display: "flex",
    flexDirection: "column",
    width: "30%",
    textAlign: "right",
  },
});

export interface Group {
  groupName: string;
  groupDescription: string;
  members: string[];
  guid: string;
  schedule: Event[];
  channels: Channel[];
}

export interface Channel {
  channelName: string;
  channelDescription: string;
  guid: string;
  posts: Post[];
}

export interface Post {
  channelId: string;
  title?: string;
  date: Date;
  content: string;
  mediaLink: string;
  guid: string;
}

export interface Event {
  name: string;
  date: Date;
  duration: number;
  details: string;
  location: string;
  participants: string[];
  organizers: string[];
  guid: string;
}

export interface Interest {
  interestName: string;
  guid: string;
}

export interface Member {
  name: string;
  guid: string;
  email: string;
  username: string;
  interests: string[];
  picture?: string;
  status: string;
  groups: string[];
}

export interface Notification {
  message: string;
  type: string;
  guid: string;
}
const GetMemberById = (memberId: string): Member => {
  const members = [
    {
      name: "John Doe",
      guid: "123",
      email: "johnDoe@gmail.com",
      username: "johnDoe",
      interests: ["Coding", "Reading"],
      picture: "",
      status: "Active",
      groups: ["123", "456"],
    },
    {
      name: "Jane Doe",
      guid: "456",
      email: "janedoe@gmail.com",
      username: "janedoe",
      interests: ["Coding", "Reading"],
      picture: "",
      status: "Active",
      groups: ["123", "456"],
    },
  ];
  return (
    members.find((x) => x.guid == memberId) || {
      name: "",
      guid: "",
      email: "",
      username: "",
      interests: [],
      picture: "",
      status: "",
      groups: [],
    }
  );
};

interface Props {
  group: Group;
}
const GroupItem = (props: Props): JSX.Element => {
  const classes = useStyles();
  const group = props.group;
  const members = group.members.map((member: string) => GetMemberById(member));
  return (
    <div className={classes.wrapper}>
      <>
        <List className={classes.groupInfoWrapper}>
          <ListItemText
            primary={
              <React.Fragment>
                <Typography variant="h4">{group.groupName}</Typography>
              </React.Fragment>
            }
            secondary={
              <React.Fragment>
                <Typography
                  className={classes.groupDescription}
                  variant="body1"
                >
                  {group.groupDescription}
                </Typography>
              </React.Fragment>
            }
          />
        </List>
        <List>
          {members.map((member) => {
            return (
              <ListItem key={member.guid}>
                <ListItemAvatar>
                  <Avatar src={member.picture || "/static/unknown-image.png"} />
                </ListItemAvatar>
                <ListItemText primary={member.name} />
              </ListItem>
            );
          })}
        </List>
        <div className={classes.scheduleWrapper}>
          <List>
            {group.schedule.map((event) => {
              return (
                <ListItem key={event.guid}>
                  <ListItemText
                    primary={event.name}
                    secondary={event.location}
                  />
                </ListItem>
              );
            })}
          </List>
          <Typography variant="h5">{members.length} members</Typography>
          {/* DO members in common <Typography variant="h6">{members.length} connections in common</Typography> */}
        </div>
      </>
    </div>
  );
};
export default GroupItem;
