import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AuthProvider from "./context/AuthContext.jsx";
import { Provider as ReduxProvider } from "react-redux";
import store from "./store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <ReduxProvider store={store}>
        <App />
      </ReduxProvider>
    </AuthProvider>
  </React.StrictMode>
);
