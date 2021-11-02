// import logo from "./logo.svg";
import "./App.css";
import TodoPage from "./pages/Todo/TodoPage";
import { mockTodo } from "./mockData";

function App() {
  return <TodoPage title="To DO APP" todos={mockTodo} />;
}

export default App;
