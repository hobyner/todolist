import React, { Component } from "react";
import FlipMove from "react-flip-move";

class TodoItems extends Component {
  constructor(props) {
    super(props);

    this.createTasks = this.createTasks.bind(this);
  }

  createTasks(item) {
    return <li key={item.key}>{item.text}
              <a onClick={() => this.delete(item.key)}>X</a>
            </li>
  }

  delete(key) {
    console.log("Key is: " + key);
    this.props.delete(key);
  }

  render() {
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map(this.createTasks);

    return (
      <ul className="theList">
        <FlipMove duration={200} easing="ease-out">
          {listItems}
        </FlipMove>
      </ul>
    );
  }
}

export default TodoItems;
