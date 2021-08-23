import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import MainMenu from "./components/MainMenu";

function App() {
  return (
    <Router>
      <MainMenu>
        <AppRouter />
      </MainMenu>
    </Router>
  );
}

export default App;
