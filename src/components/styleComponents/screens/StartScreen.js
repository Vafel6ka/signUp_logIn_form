import React from "react";
import  { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const StartScreen = (props) => {
  
    return (
        <View style = {styled.wrapper}>
            <View style = {styled.btnBlock}>
                <TouchableOpacity style = {styled.chgPassBtn} onPress = {() => props.navigation.navigate('LogInForm')}>
                    <Text style = {styled.chgPassText}>LogIn</Text>
                </TouchableOpacity>

                <TouchableOpacity style = {styled.chgPassBtn} onPress = {() => props.navigation.navigate('SignUpForm')}>
                    <Text style = {styled.chgPassText}>SignUp</Text>
                </TouchableOpacity>
            
            </View>
            <Text style = {styled.title}> Start screen!!! </Text>
        </View>
    )
}

export default StartScreen;

const styled = StyleSheet.create({
    wrapper:{
      flex: 1
    },
    title:{
      fontSize: 26,
      alignSelf: "center",
      justifyContent:"center"
    },
    btnBlock: {
        alignItems:"flex-end"
    },
    chgPassBtn: {
        marginRight:20,
        marginTop:10
    },
      chgPassText: {
          width:40,
        fontSize: 10,
        textAlign: "center"
    }
  })