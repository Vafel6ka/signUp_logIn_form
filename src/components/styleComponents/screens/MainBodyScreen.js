import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Colors from "../../../constants/colors";
import Parse from 'parse/react-native.js';
import { connect } from "react-redux";
import LogOut from "../../../store/actions/logOut";
import Log__Btn from "../Log__Btn";
import getPostsData from "../../../store/actions/getPostsData"
import PostsList from "../PostsList";
import InputPostForm from "../InputPostForm";

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

    async function creatPost() {
      const user = Parse.User.current();
      const Post = Parse.Object.extend("Post");
            const post = new Post();
            post.set("title", props.all.sendPost.title);
            post.set("body", props.all.sendPost.body);
            post.set("user", user);
            await post.save();
      console.log(props.all)
      }

    async function getAllPosts() {
      const user = Parse.User.current();
      console.log(props.all)
  
      const Post = Parse.Object.extend("Post");

      // Find all posts by the current user
      const query = new Parse.Query(Post);
      query.equalTo("user", user);
      const userPosts = await query.find();

      //clear state.arr
      let clearArr = props.all.userDataPosts.arr;
      clearArr.splice(0,clearArr.length);

      userPosts.map(item => {
        console.log(item.attributes)
        props.getPostsDataFn(item.attributes)
        console.log(props.all.userDataPosts)
        
      } )
      
      // userPosts contains all of the posts by the current user.   
      
    }
    
    const ShowPosts = ( {arr} ) => {
      
      if (arr.length > 0) {return (arr.map((item, i) => (<PostsList key = {i}>{i}) {item.title}: {item.body}</PostsList>)))}
      else {
        return (
        <PostsList>No data</PostsList>
          )
      }
    }
    
console.log(props.all)
    return (
        <View style={styled.wrapper}>
            <View style = {styled.btnBlock}>
                <Log__Btn onPress = {UserLogOut}>
                    LogOut
                </Log__Btn>

                <Log__Btn onPress = {creatPost}>
                    addPost
                </Log__Btn>

                <Log__Btn onPress = {getAllPosts}>
                    getAllPosts
                </Log__Btn>

            </View>
            <View>
              <InputPostForm send = {creatPost}/>
            </View>
            <View style={styled.titleBlock}>
                <Text style = {styled.title}> Posts list </Text>
                
                <ScrollView style = {styled.postListBox}>
                  <ShowPosts arr = {props.all.userDataPosts.arr}/>
                </ScrollView>
                
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
      alignItems: "center",
      justifyContent:"center",
  },
  title:{
    margin:"10%",
    fontSize: 26,
  },
  btnBlock: {
      alignItems:"flex-end",
  },
  chgPassBtn: {
      marginRight:20,
      marginTop:10
  },
    chgPassText: {
        width:40,
      fontSize: 10,
      textAlign: "center"
  },
})