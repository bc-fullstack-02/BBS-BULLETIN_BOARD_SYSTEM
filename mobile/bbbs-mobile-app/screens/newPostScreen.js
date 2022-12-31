import { SafeAreaView,StyleSheet } from 'react-native'
import React from 'react'
import AddNewPost from '../components/newpost/addNewpost'

const NewPostScreen = () => {
  return (
    <SafeAreaView style={{ marginTop:35}}>
        <AddNewPost />
    </SafeAreaView>
  )
}

export default NewPostScreen