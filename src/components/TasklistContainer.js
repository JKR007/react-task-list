import React from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from "uuid";

import Tasklist from './Tasklist';
import Header from './Header';
import InputTask from './InputTask';

class TasklistContainer extends React.Component {

  state = {
    tasks: [
      {
        id: uuidv4(),
        title: 'Find a good girl who looks after to mom and marry to her!',
        completed: true
      },
      {
        id: uuidv4(),
        title: 'Marry this year!',
        completed: false
      },
      {
        id: uuidv4(),
        title: 'Make 3 sons!',
        completed: false
      }
    ]
  };

  handleClickOnComplete = (taskId) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.map((task) => {
        if(task.id === taskId) {
          return {
            ...task,
            completed: !task.completed
          }
        }
        return task
      })
    }))
  }

  deleteTask = (taskId) => {
    this.setState((prevState) => {
      return {
        tasks: prevState.tasks.filter(task => task.id !== taskId )
      }
    })
  }

  editTask = (newTitle, id) => {
    this.setState({
      tasks: this.state.tasks.map(task => {
        if(task.id === id) {
          task.title = newTitle
        }
        return task;
      })
    })
  }

  addTask = (taskTitle) => {
    let newTask = {
      id: uuidv4(),
      title: taskTitle,
      completed: false
    }
    this.setState({
      tasks: [...this.state.tasks, newTask]
    });
  }


  render() {
    return (
      <div className="container">
        <div className="inner">
          <Header />
          <InputTask addTask={this.addTask}/>
          <Tasklist
            tasks={this.state.tasks}
            handleClickOnComplete={this.handleClickOnComplete}
            deleteTask={this.deleteTask}
            editTask={this.editTask}
          />
        </div>
      </div>
    );
  };
}

export default TasklistContainer;