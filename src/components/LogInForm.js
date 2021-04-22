import React from "react";
import  { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import Parse from 'parse/react-native.js';
import InputTextArea from "../components/styleComponents/InputTextArea";
import SubmitBtn from "./styleComponents/SubmitBtn"

const LogIn = () => {
    return (
        <View style={styled.wrapper}>
            <Text style={styled.title}> LogIn </Text>
            <InputTextArea placeholder="username"/>
            <InputTextArea placeholder="password"/>
            <SubmitBtn text="Submit"/>
        </View>
    )
}

export default LogIn;

const styled = StyleSheet.create({
    wrapper:{
      flex:1,
      alignItems:"center",
      justifyContent:"center"
    },
    title:{
      fontSize:26
    },
    mailInput: {
        width:200,
        textAlign: "center"
    }
  })