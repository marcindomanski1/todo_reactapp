import React from 'react';
import Task from './task';


const TaskList = (props) => (
        props.tasks
        .filter((task) => task.toUpperCase().indexOf(props.state.query.toUpperCase()) !== -1)
        .map((task, index) => (
            <Task key={index} label={task}/>
        )
        )
);

export default TaskList;