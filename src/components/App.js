import React, { Component } from 'react';
import './App.css';
import AddTask from './AddTask'
import TaskList from './TaskList'

class App extends Component {

  state = {
    tasks: [
      {
        id: 0,
        text: 'nauczyc sie js',
        date: '2020-08-15',
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 1,
        text: 'nauczyc sie jsssssssssssssssssssssssss',
        date: '2020-07-15',
        important: true,
        active: true,
        finishDate: null,
      },

    ]


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

  render() {
    return (
      <div className="App">
        todo app
        <AddTask />
        <TaskList tasks={this.state.tasks} delete={this.deleteTask} change={this.changeTaskStatus} finishDate={this.state.finishDate} />

      </div>
    );
  }
}

export default App;