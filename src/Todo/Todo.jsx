import React, { useState } from "react";
import { mockData } from "../mockData";
import InputTodo from "./components/InputTodo";
import ListTodo from "./components/ListTodo";
import nextId from "react-id-generator";
import styles from "./Todo.module.css";

export default function Todo({ header }) {
  const [data, setData] = useState(mockData);

  // const deleteTodo = (id) => {
  //   setData((oldData) => {
  //     oldData.data.filter((item) => item.id !== id);
  //   });
  // };

  const deleteTodo = (id) => {
    setData((oldData) => ({
      data: oldData.data.filter((item) => item.id !== id),
    }));
  };

  const addTodo = (todo) => {
    const newTodo = { id: nextId(), ...todo };
    setData((oldData) => ({ data: [...oldData.data, newTodo] }));
  };

  return (
    <div>
      <h1 className={styles.rainbowText}>{header}</h1>
      <InputTodo addTodo={addTodo} />
      <ListTodo data={data} deleteTodo={deleteTodo} />
    </div>
  );
}

// export default class Todo extends Component {
//   constructor(props) {
//     super(props);
//     this.state = mockData;
//   }

//   deleteTodo = (id) => {
//     const newListTodo = this.state.data.filter((item) => item.id !== id);
//     this.setState({ data: newListTodo });
//   };

//   addTodo = (todo) => {
//     const newTodo = { id: nextId(), ...todo };
//     this.setState({ data: [...this.state.data, newTodo] });
//   };

//   render() {
//     return (
//       <div>
//         <h1 className={styles.rainbowText}>{this.props.header}</h1>
//         <InputTodo addTodo={this.addTodo} />
//         <ListTodo data={this.state.data} deleteTodo={this.deleteTodo} />
//       </div>
//     );
//   }
// }
