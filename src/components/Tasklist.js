import React from 'react';
import TasklistItem from './TasklistItem';

class Tasklist extends React.Component {
  render() {
    return (
      <div>
        {this.props.tasks.map(task => (
          <TasklistItem
            key={task.id} task={task}
            handleChangeProps={this.props.handleChangeProps}
            deleteTaskProps={this.props.deleteTaskProps}
          />
        ))}
      </div>
    );
  };
}

export default Tasklist;