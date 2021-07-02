import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';

import AppHeader from '../blocks/AppHeader';

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
    height: '100%',
    textAlign: 'center',
    backgroundColor: 'rgb(120, 2, 6)',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
}));

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    open: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={classes.fullList}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Typography variant="h3" className={classes.title}>
        <AppHeader.Link to="/">WJ DEV</AppHeader.Link>
      </Typography>
      <Divider />
      <List>
        <ListItem button key="PROJECTS">
          <AppHeader.Link to="/projects"><ListItemText primary="PROJECTS"/></AppHeader.Link>
        </ListItem>
        <ListItem button key="RESUME">
          <AppHeader.Link to="/resume"><ListItemText primary="RESUME"/></AppHeader.Link>
        </ListItem>
        <ListItem button key="CONTACT">
          <AppHeader.Link to="/contact"><ListItemText primary="CONTACT"/></AppHeader.Link>
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      <IconButton className={classes.menuButton} onClick={toggleDrawer("open", true)} edge="start" color="inherit" aria-label="menu">
        <MenuIcon />
      </IconButton>

      <Drawer anchor="left" open={state.open} onClose={toggleDrawer("open", false)}>
        {list("left")}
      </Drawer>
    </div>
  );
}
