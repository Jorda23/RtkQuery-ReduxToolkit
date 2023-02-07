import React from "react";
import { Provider } from "react-redux";
import persistStore from "redux-persist/es/persistStore";
import { PersistGate } from "redux-persist/lib/integration/react";
import { setupStore } from "./config/store";
import { WeatherApp } from "./components/WeatherApp";

const store = setupStore();
const persistor = persistStore(store);

export const App = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <WeatherApp />
        </PersistGate>
      </Provider>
    </React.StrictMode>
  );
};
