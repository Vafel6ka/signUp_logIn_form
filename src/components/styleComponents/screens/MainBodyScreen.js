import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../../../constants/colors"

const MainBodyScreen = () => {
  
    return (
        <View style={styled.wrapper}>
            <Text style={styled.title}> Initial screen </Text>
        </View>
    )
}

export default MainBodyScreen;

const styled = StyleSheet.create({
    wrapper:{
      flex:1,
      alignItems:"center",
      justifyContent:"center",
      backgroundColor: Colors.mainBGcolor
    },
    title:{
      fontSize:26
    },
  })