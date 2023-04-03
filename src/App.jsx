import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./views/home";
import Contact from "./views/contact";

function App() {
  return (
    <>
      <header>
        <h1>Project Gamma</h1>
        <Link to="contact">Contact</Link>
        <Link to="/">Home</Link>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Contact />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
