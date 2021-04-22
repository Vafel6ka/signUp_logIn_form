import React from "react";
import  { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import Parse from 'parse/react-native.js';
import InputTextArea from "../components/styleComponents/InputTextArea";
import SubmitBtn from "./styleComponents/SubmitBtn"
import LogInForm from "./LogInForm";
import SignUpForm from "./SignUpForm";
import ResetPassword from "./ResetPassword"

const Main = () => {

  return (
      <View style={styled.wrapper}>
          {/* <SignUpForm/> 
          <LogInForm/> */}
          <ResetPassword/>
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

  // const Person = Parse.Object.extend('Person');

  // async function initialPerson (name, age) {
  //   const person = new Person();
  //   person.set('name', name);
  //   person.set('age', age);
  //   person.save();
  
  //   const getName = person.get('name');
  //   }
  
  // async function getPersonName (id) {
  //   const query = new Parse.Query(Person);
  //   query.get(id).then((person)=>{
  //     console.log(person.get('name'));
  //   })
  // }
  
  // getPersonName('A82f5exhU6');
