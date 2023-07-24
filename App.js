import React from 'react';

import {Provider} from 'react-redux';
import store from './src/store/store';

import Route from './src/navigation/Route';

export default function App() {
  return (
    <Provider store={store}>
      <Route />
    </Provider>
  );
}
