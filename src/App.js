// import Navbar from './Components/Navbar/Navbar';
// import { Router,Routes, Route } from "react-router-dom";
import Home from "./Components/Home/heroSection";
// import Education from './Components/Education/education';
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/footer";
import About from "./Components/About/about";
import Portfolio from "./Components/Portfolio/portfolio";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Portfolio />
      <About />
      <Footer />
    
    </>
  );
}

export default App;
