import React from "react";
import { TextInput, StyleSheet, View, Text } from "react-native";
import SubmitBtn from "./SubmitBtn";
import enterPostTitle from "../../store/actions/enterPostTitle";
import enterPostBody from "../../store/actions/enterPostBody";
import { connect } from "react-redux";

const InputPostForm = (props) => {
    return (
        <View style = {styled.container}>
            <View style = {styled.titleBox}>
                <Text style = {styled.title}>Title: </Text>  
                <TextInput style = {styled.inputTitle} onChangeText = {(data)=>props.enterPostTitleFn(data)}/>              
            </View>
            <View style = {styled.inputPostBox}>
                <TextInput style = {styled.inputPost} multiline = {true} onChangeText = {(data)=>props.enterPostBodyFn(data)}/>                     
            </View>
            <SubmitBtn text = 'Send' onPress = {props.send}/>
        </View>
    )
}

const mapStateToProps = (state) => ({
    all: state,
    sendPost: state.sendPost
  })
  
  const mapDispatchToProps = (dispatch) => {
    return {
      enterPostTitleFn: (data) => dispatch(enterPostTitle(data)),
      enterPostBodyFn: (data) => dispatch(enterPostBody(data)),
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(InputPostForm);

const styled = StyleSheet.create({
    container: {
        alignItems: "flex-start",
        width:"95%",
        padding: 5,
        margin: 5,
        shadowOpacity: 0.16,
        shadowColor: "black",
        shadowRadius:5,
        backgroundColor:"white",
        borderRadius:10,
        borderWidth:2
    },
    titleBox: {      
        width: "100%",
        height: 30,
        flexDirection: "row",
        justifyContent: "center",
        borderBottomWidth: 1,
        borderColor: "grey"
    },
    title: {
        width: "10%",
        alignSelf: "center",
        margin: 5,
        fontSize: 16,
    },
    inputTitle: {
        width: "90%",
        fontSize: 12
    },
    inputPostBox: {
        marginTop: 5,
        width: "100%",
        borderWidth: 0.5,
        borderRadius: 10,
        borderColor: "grey"
    },
    inputPost: {
        width: "100%",
        height: 80,
        padding: 5,
        flexWrap: "nowrap"
    }
})