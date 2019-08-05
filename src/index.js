/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment, Component } from 'react';
import { Provider } from 'react-redux';
import '~/config/ReactotronConfig';
import { store } from '~/store';
import createRoutes from '~/routes';

class App extends Component {
  state = {
    email: '',
  };

  render() {
    const Routes = createRoutes;
    return (
      <Provider store={store}>
        <Routes onNavigationStateChange={() => {}} uriPrefix="/app" />
      </Provider>
    );
  }
}

export default App;
