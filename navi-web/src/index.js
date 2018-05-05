import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import theme from "./utils/theme";
import { ThemeProvider } from "styled-components";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";

const app = (
  <ThemeProvider theme={theme}>
    <App/>
  </ThemeProvider>
);
ReactDOM.render(app, document.getElementById("root"));
registerServiceWorker();
