import { View,Image,StyleSheet,Text, TouchableOpacity } from 'react-native'
import React from 'react'
const postIcon = [{
    name: "Like",
    ImgUrl: "https://img.icons8.com/ios/50/000000/like--v1.png",
  },
  {
    name: "Comment",
    ImgUrl: "https://img.icons8.com/ios/50/000000/comments.png",
  },
  {
    name: "Save",
    ImgUrl: "https://img.icons8.com/ios/50/000000/bookmark-ribbon.png",
  },
  {
    name: "Share",
    ImgUrl: "https://img.icons8.com/ios/50/000000/share.png",
  },
];
const Post = ({post}) => {
  return (
    <View style={{marginBottom:30}}>
      <PostHeader post={post}/>
      <PostImage post={post}/>
      <Icon />   
    </View>
  )
}

{/*Parte do perfil(Cabeçalho)*/}

const PostHeader = ({post}) => {
  return (
    <View
      style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between", margin:5}}>
      <View style={{flexDirection:"row",alignItems:"center"}}>
      <Image source={post.profile_picture} style={styles.story} />
      <Text style= {{color:"white",marginLeft:5,fontWeight:"700"}}>{post.user}</Text>
      </View>
     <Text style={{color:"white",fontWeight:"900"}}>...</Text>
    </View>
  );
};

{/*Parte das Imagens*/}

const PostImage = ({post}) => (
  <View style={{width:"100%", height:400}}>
     <Image source={post.image} style={{height:"100%", width:"100%", resizeMode:"cover"}} />
  </View>
)

{/*Parte dos Icones com o footer*/}

const Icon = () => {
  return (
    <View style={styles.icon}>
      {postIcon.map((icon) => (
        <TouchableOpacity>
          <View>
            <Image source={{ uri: icon.ImgUrl }} style={styles.iconImg} />
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};
{/*Parte dos estilos*/}
const styles = StyleSheet.create({
  story: {
    width: 45,
    height: 45,
    borderRadius: 50,
    borderWidth: 25,
    marginLeft: 10,  
  },
  footerIcon: {
    width: 30,
    height: 30,
  },
  icon: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 5,
  },
  iconImg: {   
    width: 25,
    height: 25,
    margin: 5,
  },
});
export default Post