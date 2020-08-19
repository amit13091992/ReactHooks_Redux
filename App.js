import React, { Component } from 'react';
import { LogBox } from "react-native";
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';
import store from './src/redux/store';

import AppNavigator from './src/navigation';
import NavigationService from './src/services/NavigationService';

LogBox.ignoreAllLogs([""]);
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <StoreProvider store={store}>
        <PaperProvider>
          <AppNavigator ref={navigatorRef => { NavigationService.setTopLevelNavigator(navigatorRef); }} />
        </PaperProvider>
      </StoreProvider>);
  }
}
