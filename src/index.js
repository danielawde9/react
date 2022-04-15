import React from "react";
import ReactDOM from "react-dom";
import ColorProvider  from "./ColorProvider";
import App from "./App";

ReactDOM.render(
  <ColorProvider>
    <App />
  </ColorProvider>,

  document.getElementById("root")
);
