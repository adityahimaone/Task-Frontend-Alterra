import React from "react";
import ListItem from "./ListItem";
import styles from "./ListTodo.module.css";

export default function ListTodo(props) {
  const { data, deleteTodo } = props;
  return (
    <div>
      <table className={styles.tableTodo}>
        <tbody>
          {data.map((todo) => (
            <ListItem key={todo.id} item={todo} deleteTodo={deleteTodo} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
