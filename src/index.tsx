import React from "react";
import ReactDOM from "react-dom";

import { DiContext, createContainer } from "./core";
import { App } from "./app";
import { appModule } from "./module";
import { todosModule } from "./todos";

const container = createContainer(appModule, todosModule);

ReactDOM.render(
  <React.StrictMode>
    <DiContext.Provider value={container}>
      <App />
    </DiContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
