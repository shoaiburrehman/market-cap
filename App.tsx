/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';

import AppStack from './src/navigations/AppStack';

const App = () => {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={'#fff'}
      />
      <AppStack />
    </SafeAreaView>
  );
}

export default App;
