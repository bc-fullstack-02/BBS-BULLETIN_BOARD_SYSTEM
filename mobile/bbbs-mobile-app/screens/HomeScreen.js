import {  ScrollView,SafeAreaView, StyleSheet} from 'react-native'
import React from 'react'
import Header from '../components/home/header'
import Stories from '../components/home/stories'
import Post from '../components/home/Post'
import Tabs from '../components/home/Tabs'
import POSTS from '../data/posts'
const HomeScreen = () => {
  return (
    
    <SafeAreaView style={StyleSheet.container}>
      
      <Header />
      < Tabs  />
    
     
      <ScrollView>
        <Post />         
      </ScrollView>
        {/*< Stories /> */}
        
   </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



export default HomeScreen