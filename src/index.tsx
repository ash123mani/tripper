import React from "react";
import ReactDOM from "react-dom";

import './_index.scss'

const App = () => (
  <h1 className="app">Myss React and TypeScript App!</h1>
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
