import React from 'react';
import {Provider} from "react-redux";

import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from "services/store";
import {Navigation} from "navigation/index.tsx";
import {SafeAreaProvider} from "react-native-safe-area-context";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          <Navigation/>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
