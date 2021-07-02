import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
import Paper from '@material-ui/core/Paper';
import MenuIcon from '@material-ui/icons/Menu';
import Main from './components/main';
import AppHeader from './blocks/AppHeader';
import TemporaryDrawer from './elements/TemporaryDrawer';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function App() {
  const classes = useStyles();
  
  return (
    <Container className={classes.root}>
      <AppHeader position="fixed">
        <Toolbar>
          <TemporaryDrawer/>
          <Hidden only={['xs']} >
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
          </Hidden>
        </Toolbar>
      </AppHeader>
      <Toolbar/>
      <Container>
        <Paper className="page-content"/>
        <Main />
      </Container>
    </Container>
  );
}
