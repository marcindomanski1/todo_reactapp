import React from 'react';
import Task from './Task';
import List from 'material-ui/List';


const TaskList = (props) => (
  <List>
    {props.tasks.filter(task => task.name.toUpperCase().indexOf(props.query.toUpperCase()) !== -1)
      .map(task => (
        <Task
          key={`task-${task.id}`}
          name={task.name}
          onRemove={() => props.onRemove(task.id)}
        />
      ))}
  </List>
);

export default TaskList;
