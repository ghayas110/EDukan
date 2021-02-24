/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   Text,
//   StatusBar,
// } from 'react-native';

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

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet, Text, View,Button } from 'react-native';
import Maintabscreen from './Elite/MaintabScreen';
// import React from 'react';
import DrawerContent from './Elite/DrawerContent';


const { persistor, store } = configureStore()
const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <>
    {/* <StatusBar 
    <Provider store={store} >
        <PersistGate
        // loading={<Loading />}
        persistor={persistor} 
        >
          <Main />
        </PersistGate>
      </Provider> */}
          <NavigationContainer>
       {/* <SignUpScreen/>  */}
 <Drawer.Navigator initialRouteName="Home" drawerContent={props=><DrawerContent {...props}/>}>
    <Drawer.Screen name="Home" component={Maintabscreen} />
  
  </Drawer.Navigator> 
  </NavigationContainer>
      </>
  );
}