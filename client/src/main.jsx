import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ProvideAuth } from "./hooks/useAuth";
import "./index.css";
import { ProvideCart } from "./hooks/useCart.jsx";
// import { UIProvider } from "./hooks/useUI.jsx";
import { ManagedUIContext } from "./hooks/useUI.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ManagedUIContext>
      <ProvideAuth>
        <ProvideCart>
          <App />
        </ProvideCart>
      </ProvideAuth>
    </ManagedUIContext>
  </React.StrictMode>
);
