import React from "react";
import  { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Colors from "../../../constants/colors"

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

            <View style={styled.titleBlock}>
                <Text style = {styled.title}> Start screen!!! </Text>
            </View>
        </View>
    )
}

export default StartScreen;

const styled = StyleSheet.create({
    wrapper:{
      flex: 1,
      backgroundColor: Colors.mainBGcolor
    },
    titleBlock: {
        flex:0.93,
        alignItems: "center",
        justifyContent:"center",
    },
    title:{
      fontSize: 26,
      alignSelf: "center",
      paddingBottom: '20%'
    },
    btnBlock: {
        alignItems:"flex-end",
        flex: 0.07
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