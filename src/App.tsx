import React from "react";
import TodoApp from "./components/TodoApp";
import "./styles/App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Todo Application</h1>
      <TodoApp />
    </div>
  );
};

export default App;
