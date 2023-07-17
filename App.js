import React from 'react';

import {Provider} from 'react-redux';
import store from './src/store/store';

import RouteNavigation from './src/navigation/RouteNavigation';
export default function App() {
  return (
    <Provider store={store}>
      <RouteNavigation />
    </Provider>
  );
}
