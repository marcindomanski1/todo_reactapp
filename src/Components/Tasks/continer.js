import React, {Component} from 'react';
import Task from './task';
import TaskList from "./TasksList";

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
                <input type="text" placeholder="Search" onChange={this.searchChanged}/>
                <form onSubmit={this.handleSubmit}>
                    <input type="text"
                           value={this.state.task}
                           placeholder="Add task: "
                           onChange={this.textChanged}/>
                    <input type="submit" placeholder="Add"/>
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