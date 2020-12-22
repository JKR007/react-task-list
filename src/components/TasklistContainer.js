import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

import Tasklist from './Tasklist';
import Header from './Header';
import InputTask from './InputTask';

class TasklistContainer extends React.Component {
  state = {
    tasks: [],
    rainbowStatus: false,
  };

  // This handle method for marking the Tasks as completed
  handleChange = (id) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.map((task) => {
        if(task.id === id) {
          task.completed = !task.completed;
        }
        return task
        }),
      rainbowStatus: !this.state.rainbowStatus,
    }));
  };

  deleteTask = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
         .then((response) => {
           this.setState({
             tasks: [
               ...this.state.tasks.filter((task) => {
                 return task.id !== id;
               })
             ]
           })
         });
  };

  addTask = (title) => {
    if(!title) return;

    axios.post('https://jsonplaceholder.typicode.com/todos', {
        title: title,
        completed: false
    }).then((response) => {
      this.setState({
        tasks: [...this.state.tasks, response.data]
      })
    });
  };

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos', {
      params: {
        _limit: 10
      }
    }).then((response) => {
      this.setState({
        tasks: response.data
      })
    });
  };

  render() {
    return (
      <div className="container">
        <Header status={this.state.rainbowStatus}/>
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