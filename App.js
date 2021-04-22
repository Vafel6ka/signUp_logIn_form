import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { initializeParse } from "@parse/react-native";
import Main from "./src/components/Main";

initializeParse(
  'https://parseapi.back4app.com/',
  'hsoB8AZOkEUBhqVa6TDdoIbA6GoiBvmZAxun56Bf',
  'iso7eACjIWJJXDqilSFe3M8kRUKDt3CceBMNgu7x'
);

const App = () => {

  return (
    <View style={styled.wrapper}>
      <Main/>
    </View>
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