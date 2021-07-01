import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Main from './components/main';
import AppHeader from './blocks/AppHeader';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function App() {
  const classes = useStyles();
  
  return (
    <Container>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <AppHeader.Link to="/">WJ DEV</AppHeader.Link>
          </Typography>
          <Button color="inherit">
            <AppHeader.Link to="/projects">PROJECTS</AppHeader.Link>
          </Button>
          <Button color="inherit">
            <AppHeader.Link to="/resume">RESUME</AppHeader.Link>
          </Button>
          <Button color="inherit">
            <AppHeader.Link to="/contact">CONTACT</AppHeader.Link>
          </Button>
        </Toolbar>
        {/* <Drawer
          title={}
          style={{
            backgroundColor: "#780206",
            border: "none",
          }}
        >
          <Navigation>
            <AppHeader.Link to="/projects">PROJECTS</AppHeader.Link>
            <AppHeader.Link to="/resume">RESUME</AppHeader.Link>
            <AppHeader.Link to="/contact">CONTACT</AppHeader.Link>
          </Navigation>
        </Drawer> */}
      </AppBar>
      <Container>
        <Container className="page-content" />
        <Main />
      </Container>
    </Container>
  );
}
