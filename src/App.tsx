import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import {Provider} from "react-redux";

import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from "./services/store";


function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text>StarWarsApp</Text>
        </View>
      </PersistGate>
    </Provider>
  );
}

export default App;
