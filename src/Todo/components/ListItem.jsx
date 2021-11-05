import React, { useState } from "react";
import styles from "./ListItem.module.css";

export default function ListItem({ item, deleteTodo }) {
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

  const isCompleted = { textDecoration: "line-through" };
  return (
    <tr>
      <td>
        <input
          type="checkbox"
          id="checklist"
          name="completed"
          value={data.completed}
          checked={data.completed}
          onChange={onChange}
        />
      </td>
      <td style={data.completed ? isCompleted : null}>{item.title}</td>
      <td>
        <button
          className={styles.listItemInput}
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
