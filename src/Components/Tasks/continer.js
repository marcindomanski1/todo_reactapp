import React, {Component} from 'react';
import Task from './task';

class Container extends Component {

    constructor(props) {
        super(props);
        this.textChanged = this.textChanged.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.searchChanged = this.searchChanged.bind(this);
        this.state = {
            query: '',
            task: '',
            tasks: []
        };
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
                {
                    this.state.tasks
                        .filter((task) => task.toUpperCase().indexOf(this.state.query.toUpperCase()) !== -1)
                        .map((task, index) => (
                            <Task key={index} label={task}/>
                        ))
                }
            </div>
        )
    };
}

export default Container;