/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { Provider } from 'react-redux';
import { configureStore } from './redux/ConfigureStore'
import { PersistGate } from 'redux-persist/integration/react';
import Main from './Components/Main';
import Amplify from 'aws-amplify'
import config from './aws-exports'

Amplify.configure(config)

const { persistor, store } = configureStore()

export default function App() {
  return (
    <>
    {/* <StatusBar  */}
    <Provider store={store} >
        <PersistGate
        // loading={<Loading />}
        persistor={persistor} 
        >
          <Main />
        </PersistGate>
      </Provider>
      </>
  );
}