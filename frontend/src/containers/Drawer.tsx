import React, { Component } from 'react';
import { SwipeableDrawer, List, ListItem, Divider, ListItemText } from '@material-ui/core';
// import { Box } from '@material-ui/system';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core';



const useStyles = makeStyles({
    
  list: {
      width: 800,
  },
    
  });
  
interface Props {
    open: boolean;
    onChange: (val: boolean) => void
}
export default function Drawer({open, onChange}:Props){

    const classes = useStyles();
    const history = useHistory()
    
    // const [open, setOpen] = React.useState<boolean>(open);
    return (
    <div>
      <SwipeableDrawer
        anchor="right"
        
        open={open}
        onClose={() => onChange(false)}
        onOpen={() => onChange(true)}>
          <div className={classes.list}>
            components
          {/* <Box textAlign="center" p={2}>
            Components
          </Box> */}
          <Divider />
          <List>
            <ListItem button onClick={() => history.push('/signup')}>
              <ListItemText primary={'Container'} />
            </ListItem>
            <ListItem button onClick={() => history.push('/signup')}>
              <ListItemText primary={'Cards'} />
            </ListItem>
          </List>
        </div>
      </SwipeableDrawer>
    </div>
  );
}
