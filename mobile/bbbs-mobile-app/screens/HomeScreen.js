import {  ScrollView,SafeAreaView} from 'react-native'
import React from 'react'
import Header from '../components/home/header'
import Stories from '../components/home/stories'
import Post from '../components/home/Post'
import POSTS from '../data/posts'
import Tabs from '../components/home/Tabs'
import {IconFooter} from '../components/home/Tabs'
const HomeScreen = () => {
  return (
    
    <SafeAreaView>
      <Header />
      <Stories />
      <ScrollView>
      {POSTS.map((post, index) => (
      <Post post={post} key={index}/>
      ))} 
      </ScrollView>
  < Tabs  icons={IconFooter}/>
   </SafeAreaView>
  )
}


export default HomeScreen