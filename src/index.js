import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.scss";

class TodoApp extends React.Component {
  constructor() {
    super();
    this.state = {
      itemArray: [],
      completedTask: []
    }
    this.taskComplete = this.taskComplete.bind(this);
  }

  handleKeyPress(e) {
    if (e.key == 'Enter') {
      const text = document.getElementById('new-todo').value;
      document.getElementById('new-todo').value = '';
      const item = this.state.itemArray;
      item.push({ text });
      this.setState({ itemArray: item });
    }
  }

  taskComplete(text) {
    const items = this.state.itemArray;
    this.setState({ itemArray: items.filter(item => item.text !== text) });
    const completedTask = this.state.completedTask;
    completedTask.push({ text });
    this.setState({ completedTask: completedTask });
    console.log(this.state.completedTask);
  }

  render() {
    return (
      <div className="container">
        <h1 className="heading">todos</h1>
        <div>
          <input type="text" name="todo" id="new-todo" className="new-todo" placeholder="what needs to be done?" onKeyPress={this.handleKeyPress.bind(this)} />
        </div>
        <div className="inline-block section">
          <h1>Active tasks</h1>
          <div className="todo-task">
            {this.state.itemArray.map((item, index) => {
              return (
                <div className="box" key={index}>
                  <div>
                    <p>{item.text}</p>
                    <button type="button" className="close inline-block" onClick={() => this.taskComplete(item.text)} aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <div className="inline-block section">
          <h1>Completed tasks</h1>
          <CompletedTask items={this.state.completedTask} />
        </div>
      </div>
    )
  }
}

function CompletedTask(props) {
  return (
    <div>
      {props.items.map((item, index) => {
        return (
          <div className="box" key={index}>
            <div>
              <p>{item.text}</p>
              <button type="button" className="close inline-block" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

ReactDOM.render(<TodoApp />, document.getElementById('root'))