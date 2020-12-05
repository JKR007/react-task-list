import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import Tasklist from './Tasklist';
import Header from './Header';
import InputTask from './InputTask';

class TasklistContainer extends React.Component {
  state = {
    tasks: [
      {
        id: uuidv4(),
        title: "Setup development environment",
        completed: true
      },
      {
        id: uuidv4(),
        title: "Develop website and add content",
        completed: false
      },
      {
        id: uuidv4(),
        title: "Deploy to live server",
        completed: false
      }
    ]
  };

  // This handle method for marking the Tasks as completed
  handleChange = (id) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.map((task) => {
      if(task.id === id) {
        task.completed = !task.completed;
      }
      return task
      })
    }));
  };

  deleteTask = (id) => {
  this.setState({
    tasks: [
      ...this.state.tasks.filter(task => {
        return task.id !== id;
      })
    ]
  });
  };

  addTask = (title) => {
    const newTask = {
      id: uuidv4(),
      title: title,
      completed: false
    };

    this.setState({
      tasks: [...this.state.tasks, newTask]
    });
  };

  render() {
    return (
      <div className="container">
        <Header />
        <InputTask addTaskProps={this.addTask} />
        <Tasklist
          tasks={this.state.tasks}
          handleChangeProps={this.handleChange}
          deleteTaskProps={this.deleteTask}
        />
      </div>
    );
  };
}

export default TasklistContainer;