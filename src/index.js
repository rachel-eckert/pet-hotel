import { createRoot } from "react-dom/client";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import Main from "./Main";
/* Import and destructure main from src/component/index.js
and anything else you may need here */

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <Main />
  </Provider>
);
