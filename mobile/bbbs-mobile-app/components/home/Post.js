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
      <Comment post={post}/>  
      <CommentSection post={post}/> 
      <CommentList post={post}/>   
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
      <Text style= {{color:"white",margin:5,fontWeight:"700"}}>{post.user}</Text>
      <Text style={{display: "flex",marginTop: 25,fontSize: 12,marginLeft: -34,fontWeight: "700",color: "#8e8e8e",textTransform:"uppercase"}}>{post.Location}</Text>
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
{/*Likes */}

{/*Parte dos Icones com o footer*/}

const Icon = () => {
  return (
    <View style={{flexDirection:"row",justifyContent:"space-around"}}>
      {postIcon.map((icon) => (
        <TouchableOpacity>
          <View>
            <Image source={{ uri: icon.ImgUrl }} style={{
              width: 18,
              height: 18,
              margin: 5,}} />

          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

{/*Parte dos descricao */}
const Comment = ({post}) => {
  return (
    <View style={{flexDirection:"column",margin:5}}>
      <Text style={{color:"white",marginLeft:5,fontWeight:"700",marginRight:5}}>{post.user}</Text>
      <Text style={{color:"white",marginLeft:5,fontWeight:"700",marginRight:5}}>{post.likes} likes</Text>
      <Text style={{color:"white",marginLeft:5,fontWeight:"700"}}>{post.caption}</Text>
      <Text style={{color: "#8e8e8e",marginLeft: 5,fontWeight: "700",fontSize: 12,marginTop: 5}}>{post.postDate}</Text>
    </View> 
  );
};

{/*Parte dos Comentarios*/}
const CommentSection = ({post}) => (
  <TouchableOpacity>
  <View style={{marginTop:5}}>
    {!! post.comments.length && (
  <Text style={{color:"#8e8e8e",marginLeft:5,fontWeight:"700"}}>
    View{post.comments.length > 1 ? " all " : " "} {
    post.comments.length}    
     {post.comments.length > 1 ? " Coments" : " Coment"} 
  </Text>)}
  </View>
</TouchableOpacity>
)
{/*exibir comentarios*/}
const CommentList = ({post}) => (
  <>
    {post.comments.map((comment, index) => (
      <View key={index} style={{flexDirection:"row",margin:5}}>
        <Text style={{color:"white",fontWeight:"700", padding:5}}>{comment.user}</Text>
        <Text style={{color:"white",fontWeight:"700", margin:5}}>{comment.comment}</Text>
      </View>
    ))}
  </>
)
{/*Parte dos estilos*/}
const styles = StyleSheet.create({
  story: {
    width: 45,
    height: 45,
    borderRadius: 50,
    borderWidth: 25,
    marginLeft: 10,  
  }  
});
export default Post