import React from "react";
import RouteApp from "./shopping/routers";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import configStore from "./shopping/store";
import { Skeleton } from "antd";

const { store, persistor } = configStore();
const Shopping = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<Skeleton active />} persistor={persistor}>
        <RouteApp />
      </PersistGate>
    </Provider>
  );
};
export default Shopping;
