import React from "react";
import  { View, Text, StyleSheet } from "react-native";
import Parse from 'parse/react-native.js';
import InputTextArea from "../components/styleComponents/InputTextArea";
import InnerText from "../components/styleComponents/InnerText"
import SubmitBtn from "./styleComponents/SubmitBtn";
import { connect } from "react-redux"
import getEmail from "../store/actions/getEmail";


const ResetPassword = (props) => {
  
    const resetPass = () => {
        Parse.User.requestPasswordReset(props.email.toString())
            .then(function() {
                console.log("Password reset request was sent successfully");
                console.log(props.email.toString());
                })
            .catch(function(error) {
                console.log("The login failed with error: " + error.code + " " + error.message);
          });
        //   console.log(props.email.toString());
    }

    return (
        <View style={styled.wrapper}>
            <Text style={styled.title}> Reset password </Text>
            <InnerText>Enter your email</InnerText>
            <InputTextArea  placeholder="Enter email" 
                            onChangeText = {data => {props.getEmailFn(data)}}/>

            <SubmitBtn text="Submit" onPress = {resetPass}/>
        </View>
    )
}

const mapStateToProps = (state) => ({
    all:state,
    email: state.userResetPass.email,
})

const mapDispatchToProps = (dispatch)=> {
    return {
        getEmailFn: (data) => dispatch(getEmail(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);

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