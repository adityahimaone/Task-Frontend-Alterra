import React, { Component } from "react";
import { mockData } from "../mockData";
import InputTodo from "./components/InputTodo";
import ListTodo from "./components/ListTodo";
import nextId from "react-id-generator";
import styles from "./Todo.module.css";

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = mockData;
  }

  deleteTodo = (id) => {
    const newListTodo = this.state.data.filter((item) => item.id !== id);
    this.setState({ data: newListTodo });
  };

  addTodo = (todo) => {
    const newTodo = { id: nextId(), ...todo };
    this.setState({ data: [...this.state.data, newTodo] });
  };

  render() {
    return (
      <div>
        <h1 className={styles.rainbowText}>{this.props.header}</h1>
        <InputTodo addTodo={this.addTodo} />
        <ListTodo data={this.state.data} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}
