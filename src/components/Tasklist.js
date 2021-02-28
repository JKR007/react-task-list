import React from 'react';
import TasklistItem from './TasklistItem';

class Tasklist extends React.Component {
  render() {
    return (
      <ul>
        {this.props.tasks.map((task) => (
          <TasklistItem
            key={task.id} task={task}
            handleClickOnComplete={this.props.handleClickOnComplete}
            deleteTask={this.props.deleteTask} 
            editTask={this.props.editTask}
          />
        ))}
      </ul>
    );
  };
}

export default Tasklist;