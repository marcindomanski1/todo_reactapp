import React, {Component} from 'react';
import TaskList from "./TasksList";
import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import {connect} from 'react-redux';
import {add, search, remove, init} from './state';

const mapStateToProps = state => ({
  tasksList: state.tasks.tasks,
  query: state.tasks.query
});

const mapDispatchToProps = dispatch => ({
  addNewTask: task => dispatch(add(task)),
  searchTask: value => dispatch(search(value)),
  removeTask: taskId => dispatch(remove(taskId)),
  initTasks: () => dispatch(init())
});

class Container extends Component {
  state = {
    task: ''
  };

  componentWillMount() {
    this.props.initTasks();
  }

  textChanged = event => {
    this.setState({task: event.target.value});
  }

  searchChanged = event => {
    this.props.searchTask(event.target.value);
  }

  handleSubmit = event => {
    this.props.addNewTask(this.state.task);
  }

  handleOnRemove = task => {
    this.props.removeTask(task);
  }

  render() {
    return (
      <Grid container spacing={24}>
        <Grid item sm={3}/>
        <Grid item xs={12} md={6}>
          <Paper>
            <Grid item xs={12} style={{textAlign: "center"}}>
              <TextField
                id="task"
                label="Search"
                margin="normal"
                onChange={this.searchChanged}
              />
            </Grid>
            <Grid item xs={12} style={{textAlign: "center"}}>
              <TextField
                id="task"
                label="Task"
                value={this.state.task}
                margin="normal"
                onChange={this.textChanged}
              />
              <Grid>
                <Button onClick={this.handleSubmit} type="submit" fab color="primary" aria-label="add"
                >Add Task</Button>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Typography type="headline" gutterBottom style={{marginLeft: 20}}>List of
                tasks:</Typography>
              <TaskList
                query={this.props.query}
                tasks={this.props.tasksList}
                onRemove={this.handleOnRemove}
              />
            </Grid>
          </Paper>
        </Grid>
        <Grid item sm={3}/>
      </Grid>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
