import React from "react";
import { View, Text,Image,StyleSheet, ScrollView}from "react-native";
import { Divider } from "@react-native-material/core";
import  POSTS from "../../data/posts";
const Post = ({post}) => {
    return (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View>
                <Divider />
                {POSTS.map((post, index) => (
                    <View key={index}>
                        {postHeader(post)}
                        <Image source={post.image} style={styles.postImage}/>
                        
                        <View >
                
                            <Text style={styles.likes}>{post.likes} likes</Text>
                            <Text style={styles.caption}>{post.caption}</Text>
                            <Text style={styles.postDate}>1 day ago</Text>
                        </View>
                        {post.comments.map((comment, index) => (
                            <View key={index}>
                                <Text style={styles.comment}>
                                    <Text style={styles.commentUser}>{comment.user}</Text>
                                    {comment.comment}
                                </Text>
                            </View>
                        ))}
                        <Divider />
                    </View>                   

                ))}
                
            </View>
        </ScrollView>

    )
}
const postHeader = (post) => {
    return (
        <View style={styles.postHeader}>
            <Image source={post.profile_picture} style={styles.profilePicture}/>
            <Text style={styles.username}>{post.user}</Text>
        </View>
    )
}



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
    },
    commentUser: {
        fontWeight: 'bold',
        marginRight: 5,
    },
    postImage: {
        width: 400,
        height: 250,
        resizeMode: 'cover',
    },
    imagePost: {
        width: '100%',
        height: 400,
        resizeMode: 'cover',
    },
})

export default Post;