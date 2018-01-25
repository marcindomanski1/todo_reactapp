import React, {Component} from 'react';
import TaskList from "./TasksList";
import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      task: '',
      tasks: ['Sample task']
    };
    this.textChanged = this.textChanged.bind(this);
    this.searchChanged = this.searchChanged.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOnRemove = this.handleOnRemove.bind(this);
  }

  textChanged(event) {
    this.setState({task: event.target.value});
  }

  searchChanged(event) {
    this.setState({query: event.target.value});
  }

  handleSubmit(event) {
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: ''
    });
    event.preventDefault();
  }

  handleOnRemove(taskRemoved) {
    this.setState({
      tasks: this.state.tasks.filter(task => task !== taskRemoved),
      task: ''
    });
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
              <form onSubmit={this.handleSubmit}>
                <TextField
                  id="task"
                  label="Task"
                  value={this.state.task}
                  margin="normal"
                  onChange={this.textChanged}
                />
                <Grid>
                  <Button type="submit" fab color="primary" aria-label="add"
                  >Add Task</Button>
                </Grid>
              </form>
            </Grid>
            <Grid item xs={12}>
              <Typography type="headline" gutterBottom style={{marginLeft: 20}}>List of
                tasks:</Typography>
              <TaskList
                query={this.state.query}
                tasks={this.state.tasks}
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

export default Container;
