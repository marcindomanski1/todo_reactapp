import React, {Component} from 'react';
import TaskList from "./TasksList";
import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';

const styles = theme => ({
    root: {
        flexGrow: 1,
        marginTop: 30,
    },
    paper: {
        padding: 16,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
});


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
        const classes = this.props;
        return (
            <div className={classes.root}>
                <Grid container spacing={24}>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <TextField
                                id="task"
                                label="Search"
                                margin="normal"
                                onChange={this.searchChanged}
                            />
                            <Grid item xs={12}>
                                <form onSubmit={this.handleSubmit}>
                                    <TextField
                                        id="task"
                                        label="Task"
                                        value={this.state.task}
                                        margin="normal"
                                        onChange={this.textChanged}
                                    />
                                    <Button type="submit" fab color="primary" aria-label="add" className={classes.button}>Add Task</Button>
                                </form>
                            </Grid>
                            <Grid item xs={12}>
                                <h2>My tasks</h2>
                            </Grid>
                            <Grid item xs={12}><TaskList
                                query={this.state.query}
                                tasks={this.state.tasks}
                                onRemove={this.handleOnRemove}
                            />
                            </Grid>
                        </Paper>
                    </Grid>

                </Grid>
            </div>
        )
    };
}

export default Container;