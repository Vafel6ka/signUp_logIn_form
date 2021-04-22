import React from "react";
import { View, Text, StyleSheet, Alert, TouchableOpacity } from "react-native";
import Parse from 'parse/react-native.js';
import InputTextArea from "../components/styleComponents/InputTextArea";
import SubmitBtn from "./styleComponents/SubmitBtn";
import { connect } from "react-redux"
import getLogin from "../store/actions/getLogin";
import getPass from "../store/actions/getPass";
import getEmail from "../store/actions/getEmail";

const LogIn = (props) => {
  
  const logIn = () => {
    let user = Parse.User.logIn(props.username.toString(), props.password.toString())
      .then(user => {
        console.log('We get '+ user.get("username") + ' and his email: ' + user.get("email"))
        props.navigation.navigate('MainBodyScreen')
    })
      .catch (error => {
        console.log(error, "Error!!!");
        Alert.alert('Error', 'Something wrong! Try again...')
      })
  }

    return (
        <View style={styled.wrapper}>
            <Text style={styled.title}> LogIn </Text>
            <InputTextArea  placeholder = "username" 
                            onChangeText = {data => props.getLoginFn(data)}/>

            {/* <InputTextArea placeholder="email"/> */}

            <InputTextArea  placeholder = "password"
                            onChangeText = {data => props.getPassFn(data)}/>

            <TouchableOpacity style = {styled.chgPassBtn} onPress = {() => props.navigation.navigate('ResetPassword')}>
              <Text style = {styled.chgPassText}>"Don't remember the password"</Text>
            </TouchableOpacity>

            <SubmitBtn text = "Submit" onPress = {logIn}/>
        </View>
    )
}

const mapStateToProps = (state) => ({
  all:state,
  username: state.userLoginInfo.username,
  password: state.userLoginInfo.password,
  email: state.userLoginInfo.email
})

const mapDispatchToProps = (dispatch) => {
  return {
    getLoginFn: (data) => dispatch(getLogin(data)),
    getPassFn: (data) => dispatch(getPass(data)),
    getEmailFn: (data) => dispatch(getEmail(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);

const styled = StyleSheet.create({
    wrapper:{
      flex:1,
      alignItems:"center",
      justifyContent:"center"
    },
    title:{
      fontSize:26,
      margin:10
    },
    mailInput: {
      width:200,
      textAlign: "center"
    },
    chgPassBtn: {
      margin:10
    },
    chgPassText: {
      fontSize:10
    }
  })