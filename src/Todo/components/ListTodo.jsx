import React from "react";
import ListItem from "./ListItem";
import styles from "./ListTodo.module.css";

export default function ListTodo({ data, deleteTodo }) {
  return (
    <div>
      <table className={styles.tableTodo}>
        <tbody>
          {data.data.map((item) => (
            <ListItem key={item.id} item={item} deleteTodo={deleteTodo} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

// // {Object.keys(data.data).map((item, i) => (
// //   <ListItem key={item.id} item={data.data[item]} deleteTodo={deleteTodo} />
// ))}
