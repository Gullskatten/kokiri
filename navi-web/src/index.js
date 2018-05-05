import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "unstated";

import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";

const app = (
  <Provider>
    <App />
  </Provider>
);
ReactDOM.render(app, document.getElementById("root"));
registerServiceWorker();
