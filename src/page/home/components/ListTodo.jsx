import React from "react";
import ListItem from "./ListItem";
import styles from "./ListTodo.module.css";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo } from "../../../store/todoSlice";

export default function ListTodo() {
  const todos = useSelector((state) => state.todo.todos);
  console.log("todos", todos);
  console.log("todos data", todos.data);
  const dispatch = useDispatch();
  return (
    <div>
      <table className="table-auto mx-auto">
        <tbody>
          {todos.data.map((item) => (
            <ListItem
              key={item.id}
              item={item}
              deleteTodo={() => {
                dispatch(deleteTodo(item.id));
              }}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
