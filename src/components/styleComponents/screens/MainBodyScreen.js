import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Colors from "../../../constants/colors";
import Parse from 'parse/react-native.js';
import { connect } from "react-redux";
import LogOut from "../../../store/actions/logOut";
import Log__Btn from "../Log__Btn";
import getPostsData from "../../../store/actions/getPostsData"

const MainBodyScreen = (props) => {
    const str = '';
    const tempObj = ''
    const UserLogOut = () => {
      Parse.User.logOut().then(() => {
        const currentUser = Parse.User.current();  // this will now be null
        console.log(currentUser)
      });
      props.LogOutFn();
    }
    let _switch = 'false'

    async function getSomethingFromCurrentUser(str) {
      const user = Parse.User.current();
      // Make a new post
  
      const Post = Parse.Object.extend("Post");
            // const post = new Post();
            // post.set("title", "My New Post");
            // post.set("body", "This is some great content.");
            // post.set("user", user);
            // await post.save();
  
      // Find all posts by the current user
      const query = new Parse.Query(Post);
      query.equalTo("user", user);
      const userPosts = await query.find()
      userPosts.map(item => {
        //console.log(item)
        props.getPostsDataFn(item.attributes)
        console.log(props.all.userDataPosts.arr[0])
        _switch = 'true'
      } )
      
      // userPosts contains all of the posts by the current user.   
      
    }
    
    const ShowPosts = () => {
      let arr = props.all.userDataPosts.arr
      if (arr.length > 0) 
         {return (<Text>{props.all.userDataPosts.arr[0].title}</Text>)} 
      else {
        return (<Text> FFF </Text>)
      }
    }

    return (
        <View style={styled.wrapper}>
            <View style = {styled.btnBlock}>
                <Log__Btn onPress = {UserLogOut}>
                    LogOut
                </Log__Btn>

                <Log__Btn onPress = {getSomethingFromCurrentUser}>
                    getState
                </Log__Btn>

            </View>
 
            <View style={styled.titleBlock}>
                <Text style = {styled.title}> Initial screen!!! </Text>
                <Text>{str}</Text>
                <ShowPosts/>
            </View>
        </View>
    )
}

const mapStateToProps = (state) => ({
  all: state,
})

const mapDispatchToProps = (dispatch) => {
  return {
    LogOutFn: () => dispatch(LogOut()),
    getPostsDataFn: (data) => dispatch(getPostsData(data))
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