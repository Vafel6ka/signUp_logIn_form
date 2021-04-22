import React from "react";
import  { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import Parse from 'parse/react-native.js';
import InputTextArea from "../components/styleComponents/InputTextArea";
import SubmitBtn from "./styleComponents/SubmitBtn"
import LogInForm from "./LogInForm";
import SignUpForm from "./SignUpForm";
import ResetPassword from "./ResetPassword";

const Main = () => {

  return (
      <View style={styled.wrapper}>
        {/* <MainScreen/> */}
          {/* <SignUpForm/>  */}
          {/* <LogInForm/> */}
          {/* <ResetPassword/> */}
      </View>
    )
}

export default Main;

const styled = StyleSheet.create({
    wrapper:{
      flex:1,
      alignItems:"center",
      justifyContent:"center"
    }
  })