import logo from './logo.svg';
import './App.css';
import Navbar from './parts/Navbar'
import Header from './parts/Header'
import Portofolio from './parts/SectionPortofolio'
import About from './parts/SectionAbout'
import Contact from './parts/Contact'
import Footer from './parts/Footer'


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Header></Header>
      <Portofolio></Portofolio>
      <About></About>
      {/* <Contact></Contact> */}
      <Footer></Footer>
    </div>
  );
}

export default App;
