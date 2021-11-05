import React, { useState } from "react";
import styles from "./InputTodo.module.css";

export default function InputTodo({ addTodo }) {
  const [data, setData] = useState({
    title: "",
    completed: false,
  });

  const onChange = (e) => {
    setData({
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputNotEmpty = data.title;
    if (inputNotEmpty) {
      const newData = {
        title: data.title,
        completed: data.completed,
      };
      addTodo(newData);
      setData({
        title: "",
        completed: false,
      });
    } else {
      alert("Harap masukan input");
    }
  };
  return (
    <div className={styles.addTodo}>
      <input
        type="text"
        name="title"
        value={data.title}
        onChange={onChange}
        placeholder="Add Todo"
      />
      <button onClick={handleSubmit} type="submit">
        Submit
      </button>
    </div>
  );
}
