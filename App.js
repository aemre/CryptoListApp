import React, { Component } from "react";
import { View, Text } from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { getStore, getPersistor } from "./src/Store";
import { Header, CryptoContainer } from "./src/components";

export default class App extends Component {
  render() {
    const myStore = getStore();
    const myPersistor = getPersistor();
    return (
      <Provider store={myStore}>
        <PersistGate loading={null} persistor={myPersistor}>
          <View>
            <Header />
            <CryptoContainer />
          </View>
        </PersistGate>
      </Provider>
    );
  }
}
