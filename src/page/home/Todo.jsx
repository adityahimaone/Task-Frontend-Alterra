// import React, { useState } from "react";
// import { mockData } from "../../mockData";
import InputTodo from "./components/InputTodo";
import ListTodo from "./components/ListTodo";
// import nextId from "react-id-generator";
// import Styles from "./Todo.module.css";
import { DashboardLayout } from "../../components/Layout";

export default function Todo({ header }) {
  // const [data, setData] = useState(mockData);

  // const deleteTodo = (id) => {
  //   setData((oldData) => ({
  //     data: oldData.data.filter((item) => item.id !== id),
  //   }));
  // };

  // const addTodo = (todo) => {
  //   const newTodo = { id: nextId(), ...todo };
  //   setData((oldData) => ({ data: [...oldData.data, newTodo] }));
  // };

  return (
    <DashboardLayout>
      <h1 className="text-center text-6xl text-green-500 text-shadow-sm m-4">
        todoapp
      </h1>
      <InputTodo />
      <ListTodo />
    </DashboardLayout>
  );
}
