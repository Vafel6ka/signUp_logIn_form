import 'react-native-gesture-handler';
import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { initializeParse } from "@parse/react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AsyncStorage } from "@react-native-async-storage/async-storage"
import Main from "./src/components/Main";
import { createAppContainer } from "react-navigation";
import LogInForm from "./src/components/LogInForm";
import SignUpForm from "./src/components/SignUpForm";
import ResetPassword from "./src/components/ResetPassword";
import MainBodyScreen from "./src/components/styleComponents/screens/MainBodyScreen";
import StartScreen from './src/components/styleComponents/screens/StartScreen';

const Stack = createStackNavigator();
const Parse = require('parse/react-native.js');
Parse.setAsyncStorage(AsyncStorage);
initializeParse(
  'https://parseapi.back4app.com/',
  'hsoB8AZOkEUBhqVa6TDdoIbA6GoiBvmZAxun56Bf',
  'iso7eACjIWJJXDqilSFe3M8kRUKDt3CceBMNgu7x'
);

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name = 'Home'
          component = {StartScreen}
        />

        <Stack.Screen
          name = 'Log In'
          component = {LogInForm}
        />
        
        <Stack.Screen
          name = 'Main'
          component = {MainBodyScreen}
        />

        <Stack.Screen
          name = 'Sign Up'
          component = {SignUpForm}
        />

        <Stack.Screen
          name = 'Reset password'
          component = {ResetPassword}
        />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styled = StyleSheet.create({
  wrapper:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor: "lightblue"
  },
  content:{
    fontSize:26
  }
})