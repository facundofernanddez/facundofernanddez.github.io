import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import "./styles/bootstrap.min.css";
import "./styles/app.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App container">
        <br />
        <br />
        <br />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
