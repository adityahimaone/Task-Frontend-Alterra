import React from "react";

export default function ListItem({ item, deleteGuest }) {
  return (
    <tr>
      <td>{item.nama}</td>
      <td>{item.umur}</td>
      <td>{item.jenisKelamin}</td>
      <td>
        <button
          onClick={() => {
            deleteGuest(item.id);
          }}
        >
          Hapus
        </button>
      </td>
    </tr>
  );
}
