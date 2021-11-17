import React from "react";
import "./Home.css";

const ListItem = (props) => {
  const { id, nama, umur, jk } = props.data;
  console.log("funcction",props);
  return (
    <tr>
      <td>{nama}</td>
      <td>{umur}</td>
      <td>{jk}</td>
      <td className="removeBorder" onClick={() => props.hapusPengunjung(id)}>
        <button>Hapus</button>
      </td>
    </tr>
  );
};

export default ListItem;
