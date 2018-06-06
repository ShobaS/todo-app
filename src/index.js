import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.scss";

class TodoApp extends React.Component {
  constructor() {
    super();
    this.state = {
      itemArray : []
    }
  }

  handleKeyPress(e) {
    if(e.key == 'Enter') {
      const text = document.getElementById('new-todo').value;
      document.getElementById('new-todo').value='';
      const item = this.state.itemArray;
      item.push({text});
      this.setState({itemArray: item});
      console.log(this.state.itemArray);
    }
  }

  createElement() {
    
  }

  render() {
    return (
     <div className="container">
        <h1 className="heading">todos</h1>
        <input type="text" name="todo" id="new-todo" className="new-todo" placeholder="what needs to be done?" onKeyPress={this.handleKeyPress.bind(this)} />
        <div>
          {this.state.itemArray.map((item, index) => {
            return (
              <div className="box" key={index}>
                  <div>
                    <p>{item.text}</p>
                  </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

ReactDOM.render(<TodoApp />, document.getElementById('root'))