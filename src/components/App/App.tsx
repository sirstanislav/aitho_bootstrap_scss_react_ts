import "./App.scss";
import { Header } from "../Header/Header";
import { Main } from "../Main/Main";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
};

export { App };
