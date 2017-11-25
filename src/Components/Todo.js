import React, {Component} from 'react';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [
                'Test',
                'Zadanie 1',
                'Zadanie 2'
            ]
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                tasks: [
                    'aaa', 'bbb', 'ccc'
                ]
            });
        }, 5000);
    }

    render() {
        return (
            <div>
                <h2>To Do List</h2>
                <ol>
                    {this.state.tasks.map((task, index) => {
                            return <li key={index}>{task}</li>
                        }                                       // lub (<li key={index}>{task}</li>)
                    )}
                </ol>
            </div>
        );
    }
}

export default Todo;