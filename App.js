import React from 'react';
import {Provider} from 'react-redux';
import {Store as store} from './src/redux/store';

import GurzuLearning from './src/GurzuLearning';

const App = () => {
  return (
    <Provider store={store}>
      <GurzuLearning />
    </Provider>
  );
};

export default App;
