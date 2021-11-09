import React, { useState } from "react";
import styles from "./InputTodo.module.css";
import { useDispatch } from "react-redux";
import { addTodo } from "../../../store/todoSlice";

export default function InputTodo() {
  const dispatch = useDispatch();
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
        completed: false,
      };
      dispatch(addTodo(newData));
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
        className="border border-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
        type="text"
        name="title"
        value={data.title}
        onChange={onChange}
        placeholder="Add Todo"
      />
      <button
        onClick={handleSubmit}
        className="ml-4 rounded-xl bg-green-500 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50"
        type="submit"
      >
        Submit
      </button>
    </div>
  );
}
