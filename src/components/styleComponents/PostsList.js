import React from "react";
import { Text, StyleSheet, View } from "react-native";

const PostsList = (props) => {
    return (
        <View {...props} style={{...props.style,...styled.viewBox}}>
            <Text style={styled.innerText}> {props.children} </Text>
        </View>
        
    )   
}

export default PostsList

const styled = StyleSheet.create({
    viewBox: {
        alignItems: "center",
        justifyContent:"center",
        padding: 5,
        margin: 5,
        shadowOpacity: 0.16,
        shadowColor: "black",
        shadowRadius:5,
        backgroundColor:"white",
        borderRadius:10   
      },
      innerText: {
          fontSize: 16,
          margin: 3,
      }
})