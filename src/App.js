import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/Home/Home/Home";
import { Route, Routes } from "react-router-dom";
import ShowDetails from "./Pages/ShowDetails/ShowDetails";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/showDetails/:showId" element={<ShowDetails />} />
      </Routes>
    </div>
  );
}

export default App;
