import React from "react";
import styles from "./Header.module.css";

export default function Header({ title }) {
  return (
    <div className={styles.header}>
      <h2>{title}</h2>
    </div>
  );
}
