import React from "react";
import  { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import Parse from 'parse/react-native.js';
import InputTextArea from "./styleComponents/InputTextArea";
import SubmitBtn from "./styleComponents/SubmitBtn";
import InnerText from "./styleComponents/InnerText";
import { connect } from "react-redux"
import getLogin from "../store/actions/getLogin";
import getPass from "../store/actions/getPass";
import getEmail from "../store/actions/getEmail";

const SignUpForm = (props) => {

    return (
        <View style={styled.wrapper}>
            <Text style={styled.title}> SignUp </Text>
            
            <InnerText>Set login</InnerText>
            <InputTextArea 
              placeholder="login"
              onChangeText = {data => props.getLoginFn(data)}
              />
      
            <InnerText>Set password</InnerText>
            <InputTextArea 
              placeholder = "pasword"
              onChangeText = {data => props.getPassFn(data)}/>
            
            <InnerText>Set email</InnerText>
            <InputTextArea
              type =""
              placeholder = "email"
              onChangeText = {data => props.getEmailFn(data)}
              />

            <SubmitBtn  text="Confirm" 
                        onPress={()=>{ 
                          console.log(props.all);
                          console.log(props.login);
                          console.log(props.password);
                          console.log(props.email);                           
                        }}/>
            
        </View>
    )
}

const mapStateToProps = (state) => ({
  all:state,
  login: state.userInfo.login,
  password: state.userInfo.password,
  email: state.userInfo.email
})

const mapDispatchToProps = (dispatch)=> {
  return {
    getLoginFn: (data) => dispatch(getLogin(data)),
    getPassFn: (data) => dispatch(getPass(data)),
    getEmailFn: (data) => dispatch(getEmail(data)),

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);

const styled = StyleSheet.create({
    wrapper: {
      flex:1,
      alignItems:"center",
      justifyContent:"center"
    },
    title: {
      margin:10,
      fontSize:26
    },
    sub: {
      width: 400
    }
  })