// import logo from "./logo.svg";
import "./App.css";
import ProfilePage from "./pages/Profile/ProfilePage";
import { mockUsers } from "./mockData";

function App() {
  return <ProfilePage title="Profile Page" users={mockUsers}/>;
}

export default App;
