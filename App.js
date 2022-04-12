import React from 'react';
import {Provider} from 'react-redux';
import {persistor, Store} from './src/redux/store';
import {Store as store} from './src/redux/store';
import {PersistGate} from 'redux-persist/es/integration/react';
import TestFlatlist from './src/flatlisttest';
import GurzuLearning from './src/GurzuLearning';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <GurzuLearning />
          Hello, beautiful soul.
      </PersistGate>
    </Provider>
  );
};

export default App;
