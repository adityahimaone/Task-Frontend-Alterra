import React from "react";
import "./Home.css";
import PassengerEdit from "./PassengerEdit";

const ListItem = (props) => {
  const { id, nama, umur, jk } = props.data;
  console.log("funcction", props);
  return (
    <tr>
      <td>{nama}</td>
      <td>{umur}</td>
      <td>{jk}</td>
      <td className="removeBorder" onClick={() => props.hapusPengunjung(id)}>
        <button>Hapus</button>
      </td>
      <td className="removeBorder">
        <PassengerEdit
          data={props.data}
          editPengunjung={props.editPengunjung}
        ></PassengerEdit>
      </td>
    </tr>
  );
};

export default ListItem;
