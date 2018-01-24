import React from 'react';
import Task from './task';
import List from 'material-ui/List';



const TaskList = (props) => (
    <List>
        {props.tasks
        .filter((task) => task.toUpperCase().indexOf(props.query.toUpperCase()) !== -1)
        .map((task, index) => (
            <Task key={index} label={task} onRemove={props.onRemove}/>
        ))
    }
    </List>
        );

export default TaskList;