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
import getPostsIdData from "../../../store/actions/getPostsIdData"

const MainBodyScreen = (props) => {
    const str = '';
    const tempObj = ''
    const UserLogOut = () => {
      Parse.User.logOut().then(() => {
        const currentUser = Parse.User.current();  // this will now be null
        console.log(currentUser)
      });
      props.LogOutFn();
      props.navigation.navigate('Home')
    }

    async function creatPost() {
      const user = Parse.User.current();
      const Post = Parse.Object.extend("Post");
            const post = new Post();
            post.set("title", props.all.sendPost.title);
            post.set("body", props.all.sendPost.body);
            post.set('name', props.all.userInfo.username);
            post.set("user", user);
            await post.save();
           console.log(props.all)
      }

    async function removePost(id) {
      const Post = Parse.Object.extend("Post");
      const query = new Parse.Query(Post);
      query.equalTo("objectId", id);
      const result = await query.find();
      console.log(result[0])
      //destroy
      result[0].destroy().then(() => {
        console.log('delet post');
      }, (error) => {
        // The delete failed.
        // error is a Parse.Error with an error code and message.
        });
    }

    async function getAllPosts() {
      const user = Parse.User.current();
      console.log(props.all)
      const Post = Parse.Object.extend("Post");

      // Find all posts by the current user
      const query = new Parse.Query(Post);
      // query.equalTo("user", user);
      const userPosts = await query.find();

      //clear state.arr
      let clearArr = props.all.userDataPosts.arr;
      clearArr.splice(0,clearArr.length);

      userPosts.map(item => {
        console.log(item.id)
        props.getPostsDataFn(item.attributes)
        props.getPostsIdDataFn(item.id)
        console.log(props.all)
        
      } )
      
      // userPosts contains all of the posts by the current user.   
      
    }
    
    const ShowPosts = ( {arr1, arr2} ) => {
      
      if (arr1.length > 0) {return (arr1.map((item, i) => (
        <PostsList  postId = {item.objectId} 
                    user = {item.name} 
                    title = {item.title} 
                    time = {item.createdAt.toString().slice(0, -40)} 
                    body = {item.body}
                    onPress = {()=>console.log(arr2[i])}  
                    />
        )))}
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

                <Log__Btn onPress = {getAllPosts}>
                    getAllPosts
                </Log__Btn>

            </View>
            <View style={styled.postBlock}>
                <Text style = {styled.title}> Posts list </Text>
                
                <ScrollView style = {styled.postListBox}>
                  <ShowPosts arr1 = {props.all.userDataPosts.arr} arr2 = {props.all.userDataPosts.id}/>
                </ScrollView>
            </View>
            <View style={styled.inputPostForm}>
              <InputPostForm send = {creatPost}/>
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
    getPostsDataFn: (data) => dispatch(getPostsData(data)),
    getPostsIdDataFn: (data) => dispatch(getPostsIdData(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainBodyScreen);

const styled = StyleSheet.create({
  wrapper:{
    flex: 1,
    backgroundColor: Colors.mainBGcolor
  },
  postBlock: {
    flex: 0.55,
    alignItems: "center",
    justifyContent: "center",
  },
  postListContent: {
    flex: 1,
    width: "100%",
  },
  title:{
    flex: 0.2,
    fontSize: 26
  },
  btnBlock: {
    flex: 0.15,
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
  inputPostForm: {
    flex: 0.3,
    alignItems: "center"
  },
  postListBox: {
    flex: 0.8,
    margin: 5,
    padding: 5,
    backgroundColor: Colors.mainBGcolor,
    width: "97%",
    minHeight: "10%"
  }
})