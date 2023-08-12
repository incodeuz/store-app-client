import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import AddStudentContextWrapper from "./context/addStudent";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AddStudentContextWrapper>
      <App />
    </AddStudentContextWrapper>
  </BrowserRouter>
);
