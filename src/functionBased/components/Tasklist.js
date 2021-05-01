import React from 'react';
import TasklistItem from './TasklistItem';

const Tasklist = (props) => {
    return (
      <ul>
        {props.tasks.map((task) => (
          <TasklistItem
            task={task} key={task.id}
            handleClickOnComplete={props.handleClickOnComplete}
            deleteTask={props.deleteTask} 
            editTask={props.editTask}
          />
        ))}
      </ul>
    );
}

export default Tasklist;