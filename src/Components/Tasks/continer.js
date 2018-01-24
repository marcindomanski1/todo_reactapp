import React, {Component} from 'react';
import TaskList from "./TasksList";
import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';


class Container extends Component {

    constructor(props) {
        super(props);
        this.state = {
            query: '',
            task: '',
            tasks: ['Add your first task']
        };
        this.textChanged = this.textChanged.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.searchChanged = this.searchChanged.bind(this);
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
            <div>
                <form onSubmit={this.handleSubmit}>
                    <TextField
                        id="task"
                        label="Search"
                        margin="normal"
                        onChange={this.searchChanged}
                    />
                    <TextField
                        id="task"
                        label="Task"
                        value={this.state.task}
                        margin="normal"
                        onChange={this.textChanged}
                    />
                    <Button type="submit" raised color="primary">Add Task</Button>
                </form>

                <h2>My tasks</h2>
                <TaskList
                    query={this.state.query}
                    tasks={this.state.tasks}
                    onRemove={this.handleOnRemove}

                />
            </div>
        )
    };
}

export default Container;