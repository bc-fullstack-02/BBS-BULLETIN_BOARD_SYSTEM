import {  View } from 'react-native'
import React from 'react'
import Header from '../components/home/header'
import Stories from '../components/home/stories'
import Post from '../components/home/Post'

const HomeScreen = () => {
  return (
    <View>
        <Header />
        <Stories />
         <Post  />
    </View>
  )
}



export default HomeScreen