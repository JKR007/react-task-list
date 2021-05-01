import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from "uuid";

import Tasklist from './Tasklist';
import Header from './Header';
import InputTask from './InputTask';

const TasklistContainer = () => {
  const [tasks, setTasks] = useState(getInitialTasks())

  const handleClickOnComplete = (taskId) => {
    setTasks(prevState =>
      prevState.map((task) => {
        if(task.id === taskId) {
          return {
            ...task,
            completed: !task.completed
          }
        }
        return task
      })
    )
  }

  const deleteTask = (taskId) => {
    setTasks([
      ...tasks.filter(task => {
        return task.id !== taskId
      })
    ])
  }

  const editTask = (newTitle, id) => {
    setTasks(
      tasks.map(task => {
        if(task.id === id) {
          task.title = newTitle
        }
        return task;
      })
    )
  }

  const addTask = (taskTitle) => {
    let newTask = {
      id: uuidv4(),
      title: taskTitle,
      completed: false
    }
    setTasks([
      ...tasks, newTask
    ]);
  }

  function getInitialTasks() {
    return JSON.parse(localStorage.getItem('tasks')) || []
  }

  useEffect(() => {
    let strigifiedTasks = JSON.stringify(tasks)
    localStorage.setItem('tasks', strigifiedTasks)
  }, [tasks])

  return (
    <div className="container">
      <div className="inner">
        <Header />
        <InputTask addTask={addTask}/>
        <Tasklist
          tasks={tasks}
          handleClickOnComplete={handleClickOnComplete}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      </div>
    </div>
  );
}

export default TasklistContainer;