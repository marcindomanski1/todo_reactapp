import React from 'react';
import Task from './Task';
import List from 'material-ui/List';


const TaskList = (props) => (
  <List>
    {props.tasks
      .filter(task => task.toUpperCase().indexOf(props.query.toUpperCase()) !== -1)
      .map((task, index) => (
        <Task key={`task-${index}`} name={task} onRemove={() => props.onRemove(task)}/>
      ))
    }
  </List>
);

export default TaskList;
