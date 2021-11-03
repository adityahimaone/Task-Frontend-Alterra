import React, { Component } from "react";
import { mockData } from "../mockData";
import InputTodo from "./components/InputTodo";
import ListTodo from "./components/ListTodo";
import nextId from "react-id-generator";

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

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div>
        <h1>Todos</h1>
        <InputTodo addTodo={this.addTodo} />
        <ListTodo
          data={this.state.data}
          deleteTodo={this.deleteTodo}
          checkboxTodo={this.handleInputChange}
        />
      </div>
    );
  }
}
