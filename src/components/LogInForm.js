import React from "react";
import  { View, Text, StyleSheet } from "react-native";
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
      .then(user=>{
        console.log('We get '+ user.get("username") + ' and his email: ' + user.get("email"))
    })
      .catch (error => console.log(error, "Error!!!"))
  }

    return (
        <View style={styled.wrapper}>
            <Text style={styled.title}> LogIn </Text>
            <InputTextArea  placeholder="username" 
                            onChangeText = {data => props.getLoginFn(data)}/>

            {/* <InputTextArea placeholder="email"/> */}

            <InputTextArea  placeholder="password"
                            onChangeText = {data => props.getPassFn(data)}/>

            <SubmitBtn text="Submit" onPress = {logIn}/>
        </View>
    )
}

const mapStateToProps = (state) => ({
  all:state,
  username: state.userLoginInfo.username,
  password: state.userLoginInfo.password,
  email: state.userLoginInfo.email
})

const mapDispatchToProps = (dispatch)=> {
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
      fontSize:26
    },
    mailInput: {
        width:200,
        textAlign: "center"
    }
  })