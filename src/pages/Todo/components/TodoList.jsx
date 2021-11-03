import React from "react";
import styles from "./TodoList.module.css";

export default function TodoList({ todo, key2 }) {
  // console.log(key2);
  return (
    <>
      <div className={styles.listTodo}>
        <h5
          className={styles.title}
          style={todo.completed ? { textDecoration: "line-through" } : null}
          id={key2}
        >
          {todo.title}
        </h5>
      </div>
      <br></br>
    </>
  );
}
