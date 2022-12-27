import {  ScrollView,SafeAreaView,} from 'react-native'
import React from 'react'
import Header from '../components/home/header'
import Stories from '../components/home/stories'
import Post from '../components/home/Post'
import Tabs from '../components/home/Tabs'
import POSTS from '../data/posts'
const HomeScreen = () => {
  return (
    
    <SafeAreaView>
      
      <Header />
     
      < Tabs />
     {
       /* <Stories />*/ }
       <ScrollView>
         
      </ScrollView> 
      <ScrollView>
         {POSTS.map((post, index) => (
            <Post key={index} post={post} />
         ))}
         
         </ScrollView>
     
   </SafeAreaView>
  )
}



export default HomeScreen