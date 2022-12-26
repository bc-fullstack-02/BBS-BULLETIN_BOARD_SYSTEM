import React from "react";
import { View, Text,Image,StyleSheet, ScrollView, TouchableOpacity}from "react-native";

import  POSTS from "../../data/posts";

const postIcon = [{
    name : "Like",
    ImgUrl: "https://img.icons8.com/ios/50/000000/like--v1.png"
},
{
    name : "Comment",
    ImgUrl: "https://img.icons8.com/ios/50/000000/comments.png"
},
{
    name : "Share",
    ImgUrl: "https://img.icons8.com/ios/50/000000/share.png"
},
{
    name : "Save",
    ImgUrl: "https://img.icons8.com/ios/50/000000/bookmark-ribbon.png"
},
]
const Post = (post) => {
    return (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View>     
                {POSTS.map((post, index) => (
                    <View key={index}>
                        {postHeader(post)}
                         {location(post)}
                        <Image source={post.image} style={styles.postImage}/> 
                         
                        <View>
                            
                            <Text style={styles.dotLeft}>...</Text>
                        </View> 
                        <View >
                            <Icon/>
                        <View>
                            <Text style={styles.data}>{post.postDate}</Text>
                            <Text style={styles.likes}>{post.likes} Likes</Text>
                        </View>
                        </View>
                        {caption(post)}
                        {post.comments.map((comment, index) => (
                            <View key={index}>
                                <Text style={styles.comment}>
                                    <Text style={styles.commentUser}>{comment.user}</Text>
                                    {comment.comment}
                                </Text>
                            </View>
                        ))}
                    </View>    
                    ))}               
            </View>
        </ScrollView> 
)};
const postHeader = (post) => {
    return (
        <View style={styles.postHeader}>
            <Image source={post.profile_picture} style={styles.profilePicture}/>
            <Text style={styles.username}>{post.user}</Text>
        </View>
    )
}
const Icon = () => {
    return (
        <View style={styles.icon}>
            {postIcon.map((icon, index) => (
               <TouchableOpacity>
                 <View key={index}>
                    <Image source={{uri: icon.ImgUrl}} style={styles.iconImg}/>
                </View>
               </TouchableOpacity>
            ))}
        </View>
)}
const location =(post) =>{
    return (
        <View style={styles.location}>
            <Text style={styles.location}>{post.Location}</Text>
        </View>
    )
}
const caption = (post) => {
    return (
        <View style={styles.caption}>
            <Text style={styles.username}>{post.user}</Text>
            <Text>{post.caption}</Text>
        </View>
    )
}
{
    /*const like = (post) => {
        return (
            <View style={styles.like}>
                <Text style={styles.likes}>{post.likes}</Text>
            </View>
    )}
*/}

const styles = StyleSheet.create({
postHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
profilePicture: {
        width: 40,
        height: 40,
        borderRadius: 40,
        borderWidth: 1,
        borderColor: '#89dbed',
        marginHorizontal: 10,
    },
likes: {
        fontWeight: 'bold',
        marginLeft: 10,
    },
caption: {
        marginLeft: 10,
        marginRight: 10,
    },
postDate: {
        color: '#c1c1c1',
        marginLeft: 10,
        marginTop: 5,
    },
comment: {
        flexDirection: 'row',
        marginLeft: 10,
        marginTop: 5,
        paddingBottom: 5,
    },
commentUser: {
        fontWeight: 'bold',
        marginRight: 5,
        marginBottom: 5,
        letterSpacing: 1.5,

    },
postImage: {
        width: 400,
        height: 250,
        resizeMode: 'cover',
    },
imagePost: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },

icon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
    marginHorizontal: 15,
},
iconImg: {
    width: 20,
    height: 20,
    margin: 1,
},
dotLeft: {
    fontSize: 40,
    color: '#c1c1c1',
    marginLeft: 180,
    marginTop: 2,
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'cover',
    lineHeight: 18,
},
like: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    marginHorizontal: 15,
},
likes: {
    fontWeight: 'bold',
    marginLeft: 10,
    fontSize: 16,
},
data: {
    color: '#c1c1c1',
    marginLeft: 10,
    marginTop: 5,
    fontSize: 15,
},
location: {
    color: '#c1c1c1',
    fontSize:15,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 2,
    marginHorizontal: 15,
    justifyContent: 'center',
    resizeMode: 'cover',
    lineHeight: 14,
    flexGrow: 1,
},
})
export default Post;