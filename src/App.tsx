import React from "react";
import { TodoContainer } from "./todos";

export function App() {
  return (
    <div className="App">
      <h1>Todo App with DI</h1>
      <TodoContainer />
    </div>
  );
}
