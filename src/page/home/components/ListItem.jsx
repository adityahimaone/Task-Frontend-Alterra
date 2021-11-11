import React, { useState } from "react";
// import styles from "./ListItem.module.css";

export default function ListItem({
  item,
  deleteTodo,
  editTodo,
  checklistTodo,
}) {
  let completedProps = item.completed;
  const [data, setData] = useState({
    completed: completedProps,
  });

  const onChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    setData({
      [name]: value,
    });
  };

  // const isCompleted = { textDecoration: "line-through" };
  return (
    <tr>
      <td>
        <input
          type="checkbox"
          name="completed"
          value={data.completed}
          checked={data.completed}
          onChange={onChange}
          onClick={() => {
            checklistTodo(item.id);
          }}
          className="h-4 w-4 text-green-500 mr-2"
        />
      </td>
      <td
        className={data.completed ? "line-through italic text-gray-700" : null}
      >
        {item.title}
      </td>
      <td>
        <button
          className="rounded-xl px-2 py-1 ml-5 text-white bg-green-500 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50"
          onClick={() => {
            deleteTodo(item.id);
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

// export default class ListItem extends Component {
//   // state = {
//   //   completed: false,
//   // };

//   constructor(props) {
//     super(props);
//     let completedProps = props.item.completed
//     this.state = {
//       completed: completedProps,
//     };
//   }

//   onChange = (e) => {
//     const target = e.target;
//     const value = target.type === "checkbox" ? target.checked : target.value;
//     const name = target.name;

//     this.setState({
//       [name]: value,
//     });
//   };

//   render() {
//     const isCompleted = { textDecoration: "line-through" };
//     return (
//       <tr>
//         <td>
//           <input
//             type="checkbox"
//             id="checklist"
//             name="completed"
//             value="false"
//             checked={this.state.completed}
//             onChange={this.onChange}
//           />
//         </td>
//         <td style={this.state.completed ? isCompleted : null}>
//           {this.props.item.title}
//         </td>
//         <td>
//           <button
//             className={styles.listItemInput}
//             onClick={() => {
//               this.props.deleteTodo(this.props.item.id);
//             }}
//           >
//             Delete
//           </button>
//         </td>
//       </tr>
//     );
//   }
// }

// import React from "react";
// // import styles from "./ListItem.module.css";

// export default function ListItem({ item, deleteTodo, checkboxTodo }) {
//   const isCompleted = { textDecoration: "line-through" };
//   return (
//     <tr>
//       <td>
//         <input
//           type="checkbox"
//           id="vehicle1"
//           name="completed"
//           value="false"
//           checked={item.completed ? true : false}
//           onChange={checkboxTodo}
//         />
//       </td>
//       <td style={item.completed ? isCompleted : null}>{item.title}</td>
//       <td>
//         <button
//           onClick={() => {
//             deleteTodo(item.id);
//           }}
//         >
//           Hapus
//         </button>
//       </td>
//     </tr>
//   );
// }
