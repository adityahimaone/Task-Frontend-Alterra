import "./App.css";
import React from "react";
import Routes from "./page/_routes";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate Loading={null} persistor={persistor}>
          <Routes />
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
