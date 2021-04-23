import React from "react";
import  { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Colors from "../../../constants/colors";
import Log__Btn from "../Log__Btn"

const StartScreen = (props) => {
  
    return (
        <View style = {styled.wrapper}>
            <View style = {styled.btnBlock}>
                <Log__Btn onPress = {() => props.navigation.navigate('Log In')}>
                    LogIn
                </Log__Btn>    

                <Log__Btn onPress = {() => props.navigation.navigate('Sign Up')}>
                    SignUp
                </Log__Btn>       
            </View>

            <View style={styled.titleBlock}>
                <View>
                    <Text style = {styled.title}> Start screen!!! </Text>
                </View>

                <View style={styled.titleImgBox}>
                    <Image  source = {require('../../../assets/imgs/jura_bg_img.jpg')}
                            resizeMode = "cover"
                            style = {styled.titleImg}/>
                </View>
            </View>

        </View>
    )
}

export default StartScreen;

const styled = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: Colors.mainBGcolor,
    },
    titleImgBox: {
        height: 300,
        width: 300,
        borderColor:"black",
        borderWidth:3,
        borderRadius:200,
        overflow:"hidden"  
    },
    titleImg: {
        flex: 1,
        width: "100%",
        height: "100%",
    },
    titleBlock: {
        flex:0.6,
        alignItems: "center",
        justifyContent:"center",
    },
    title: {
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