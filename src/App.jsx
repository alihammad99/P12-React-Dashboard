import React from "react";
import { useParams } from "react-router-dom";
import "./App.css";
import NavLeft from "./components/Layout/NavLeft";
import NavTop from "./components/Layout/NavTop";
import ShowData from "./components/ShowData";

function App() {
  const { id } = useParams();
  return (
    <div className="App">
      <NavTop />
      <NavLeft />
      <div style={{ marginTop: 140, marginLeft: 120 }}>
        <ShowData id={id} />
      </div>
    </div>
  );
}

export default App;
