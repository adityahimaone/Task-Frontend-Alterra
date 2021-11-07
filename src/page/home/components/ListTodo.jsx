import React from "react";
import ListItem from "./ListItem";
import styles from "./ListTodo.module.css";

export default function ListTodo({ data, deleteTodo }) {
  return (
    <div>
      <table className="table-auto mx-auto">
        <tbody>
          {data.data.map((item) => (
            <ListItem key={item.id} item={item} deleteTodo={deleteTodo} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
