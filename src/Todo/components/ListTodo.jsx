import React from "react";
import ListItem from "./ListItem";
import styles from "./ListTodo.module.css";

export default function ListTodo({ data, deleteTodo }) {
  // console.log("data",data.data)
  // console.log(deleteTodo);
  const newDataArray = data.data;
  console.log("newDataArray", newDataArray);
  return (
    <div>
      <table className={styles.tableTodo}>
        <tbody>
          {newDataArray.map((item) => (
            <ListItem key={item.id} item={item} deleteTodo={deleteTodo} />
          ))}
          {console.log("newDataArray", newDataArray)}
        </tbody>
      </table>
    </div>
  );
}
