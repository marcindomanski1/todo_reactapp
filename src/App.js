import React, {Component} from 'react';
import Header from './Components/Header';
import Footer from "./Components/Footer";
import TaskContainer from "./Components/Tasks/Continer";
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: 40
  },
  paper: {
    padding: 20,
    textAlign: 'left',
    color: theme.palette.text.secondary,
  }
});

class App extends Component {
  render() {
    const {classes} = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Header/>
              <TaskContainer/>
              <Footer/>
            </Paper>
          </Grid>
        </Grid>
      </div>

    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
