import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Form from './formUpload'
const AddNewPost = () => {
  return (
    <View style={styles.container}>
    <Header />
    <Form />
    </View>
  )
}
{/*Cabeçalho do component*/}
const Header = () => {
  return (
     <View style={styles.headerContainer}>
      <TouchableOpacity>
      <Image source={require('../../assets/images/back.png')} style={{
        width: 40,
        height: 40,
      }} />
      </TouchableOpacity>
      <Text style={styles.HeaderTEXT}>NEW POST</Text>
      <Text></Text>
    </View>
  )
}
{/*Estilização do component*/}
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  HeaderTEXT: {
    fontSize: 20,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    flexDirection: 'row',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    marginTop: 10,
  }
})
export default AddNewPost