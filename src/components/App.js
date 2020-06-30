import React, { Component } from 'react';
import './App.css';
import AddTask from './AddTask'
import TaskList from './TaskList'

class App extends Component {

  counter = 0

  state = {
    tasks: []


  }

  deleteTask = (id) => {
    //1 sposob

    // const tasks = [...this.state.tasks];
    // const index = tasks.findIndex(task => task.id === id);
    // tasks.splice(index, 1)
    // this.setState({
    //   tasks
    // })

    // 2 sposob

    let tasks = [...this.state.tasks];
    tasks = tasks.filter(task => task.id !== id)
    this.setState({
      tasks
    })
  }

  changeTaskStatus = (id) => {
    const tasks = [...this.state.tasks];
    tasks.forEach(task => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime()
      }
    })
    this.setState({
      tasks
    })
  }

  addTask = (text, date, important) => {
    const task = {
      id: this.counter,
      text, // text from input
      date, // text from input
      important, // value from input
      active: true,
      finishDate: null,
    }

    this.counter++;


    this.setState(prevState => ({
      tasks: [...prevState.tasks, task]
    }))
  }


  render() {
    return (
      <div className="App">
        <h1>TODO APP</h1>
        <AddTask add={this.addTask} />
        <TaskList tasks={this.state.tasks} delete={this.deleteTask} change={this.changeTaskStatus} finishDate={this.state.finishDate} />

      </div>
    );
  }
}

export default App;