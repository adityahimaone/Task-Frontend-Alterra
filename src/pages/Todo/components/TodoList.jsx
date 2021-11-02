import React from "react";
import styles from "./TodoList.module.css";

export default function TodoList({ todo }) {
  return (
    <>
      <div className={styles.listTodo}>
        <h5
          className={styles.title}
          style={todo.completed ? { textDecoration: "line-through" } : null}
        >
          {todo.title}
        </h5>
      </div>
      <br></br>
    </>
  );
}
