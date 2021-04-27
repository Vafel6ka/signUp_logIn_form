import React from "react";
import { Text, StyleSheet, View } from "react-native";
import Colors from "../../constants/colors";
import SubmitBtn from "../styleComponents/SubmitBtn"

const PostsList = (props) => {
    return (
        <View  key = {props.postId} {...props} style={{...props.style,...styled.viewBox}}>
            <View style = {{alignItems: "center"}}>
                <Text style={styled.user}> {props.user} </Text>
            </View>
            <Text style={styled.title}> {props.title} </Text>
            <Text style={styled.time}> {props.time} </Text>
            <Text style={styled.body}> {props.body} </Text>
            <SubmitBtn text = "Del" onPress = {props.onPress}/>
        </View>
        
    )   
}

export default PostsList

const styled = StyleSheet.create({
    viewBox: {
        alignItems: "flex-start",
        justifyContent:"center",
        padding: 5,
        margin: 5,
        shadowOpacity: 0.16,
        shadowColor: "black",
        shadowRadius:5,
        backgroundColor: Colors.mainBGcolor,
        borderRadius:10   
      },
      title: {
        fontSize: 16,
      },
      time: {
        fontSize: 10,
      },
      body: {
        fontSize: 14
      },
})