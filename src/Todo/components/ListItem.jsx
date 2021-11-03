import React from "react";
// import styles from "./ListItem.module.css";

export default function ListItem({ item, deleteTodo, checkboxTodo }) {
  const isCompleted = { textDecoration: "line-through" };
  return (
    <tr>
      <td>
        <input
          type="checkbox"
          id="vehicle1"
          name="completed"
          value="false"
          checked={item.completed ? true : false}
          onChange={checkboxTodo}
        />
      </td>
      <td style={item.completed ? isCompleted : null}>{item.title}</td>
      <td>
        <button
          onClick={() => {
            deleteTodo(item.id);
          }}
        >
          Hapus
        </button>
      </td>
    </tr>
  );
}
