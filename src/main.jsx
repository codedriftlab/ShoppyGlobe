import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// Tailwind CSS
import "./index.css";

// Redux
import { Provider } from "react-redux";
import store from "./redux/store";

// Render App
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);