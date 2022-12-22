import React from "react";
import { View, Text}from "react-native";
import { Divider } from "@react-native-material/core";
const Post = (props) => {
    return (
        <View style={{marginBottom:30}}>
             <Divider style={{ marginTop: 15 }} leadingInset={16} color="pink" />
            <Text style={{color:"gray"}}>Teeterte</Text>
            <Text>lorem</Text>
        </View>
    )
}

const PostHeader = () => {}

export default Post;