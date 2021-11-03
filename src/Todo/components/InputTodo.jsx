import React, { Component } from "react";
import styles from "./InputTodo.module.css";

export default class InputTodo extends Component {
  state = {
    title: "",
    completed: false,
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const inputNotEmpty = this.state.title;
    if (inputNotEmpty) {
      const newData = {
        title: this.state.title,
        completed: this.state.completed,
      };
      this.props.addTodo(newData);
      this.setState({
        nama: "",
        completed: false,
      });
    } else {
      alert("Harap masukan input");
    }
  };
  render() {
    return (
      <div>
        <input
          className={styles.addTodoInput}
          type="text"
          name="title"
          value={this.state.title}
          onChange={this.onChange}
          placeholder="Add Todo"
        />
        <button
          onClick={this.handleSubmit}
          className={styles.addTodo}
          type="submit"
        >
          Submit
        </button>
      </div>
    );
  }
}
