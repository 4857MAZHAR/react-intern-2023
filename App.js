import React from 'react';

import {Provider} from 'react-redux';
import store from './src/store/store';

import Route from './src/navigation/Route';
//extra imports development
import DashBoard from './src/screens/DashBoard';
//end
export default function App() {
  return (
    <Provider store={store}>
      <DashBoard />
    </Provider>
    // <Provider store={store}>
    //   <Route />
    // </Provider>
  );
}
