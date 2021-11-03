import React from "react";
import ListItem from "./ListItem";
import styles from "./ListPassenger.module.css";

export default function ListPassenger(props) {
  const { data, deleteGuest } = props;
  return (
    <div>
      <table className={styles.tableList}>
        <thead className={styles.tableListHead}>
          <td>Nama</td>
          <td>Umur</td>
          <td>Jenis Kelamin</td>
          {/* <td>Nama</td> */}
        </thead>
        <tbody>
          {data.map((passenger) => (
            <ListItem
              key={passenger.id}
              item={passenger}
              deleteGuest={deleteGuest}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
