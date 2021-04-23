import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Colors from "../../../constants/colors";
import Parse from 'parse/react-native.js';
import { connect } from "react-redux";
import LogOut from "../../../store/actions/logOut"

const MainBodyScreen = (props) => {
    const str = props.all.toString()

    const UserLogOut = () => {
      Parse.User.logOut().then(() => {
        const currentUser = Parse.User.current();  // this will now be null
        console.log(currentUser)
      });
      props.LogOutFn();
    }
  
    return (
        <View style={styled.wrapper}>
            <View style = {styled.btnBlock}>
                <TouchableOpacity style = {styled.chgPassBtn} onPress = {UserLogOut}>
                    <Text style = {styled.chgPassText}>LogOut</Text>
                </TouchableOpacity>
            </View>     

            <View style = {styled.btnBlock}>
                <TouchableOpacity style = {styled.chgPassBtn} onPress = {()=>console.log(props.all)}>
                    <Text style = {styled.chgPassText}>getState</Text>
                </TouchableOpacity>
            </View>     

            <View style={styled.titleBlock}>
                <Text style = {styled.title}> Initial screen!!! </Text>
                <Text>{str}</Text>
            </View>
        </View>
    )
}

const mapStateToProps = (state) => ({
  all:state,
})

const mapDispatchToProps = (dispatch) => {
  return {
    LogOutFn: () => dispatch(LogOut()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainBodyScreen);

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