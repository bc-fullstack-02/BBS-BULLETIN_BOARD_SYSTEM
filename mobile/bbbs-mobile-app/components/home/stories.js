import { View,Text, ScrollView ,StyleSheet,Image} from 'react-native'
import React from 'react'
import { USERS } from '../../data/users'
const stories = () => {
  return (
    <View style={{marginBottom:13}}>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Image source={require('../../assets/images/p2.jpeg')} style={styels.story}/>
        <Image source={require('../../assets/images/p3.jpeg')} style={styels.story}/>
        <Image source={require('../../assets/images/p4.jpeg')} style={styels.story}/>
        <Image source={require('../../assets/images/p5.jpeg')} style={styels.story}/>
        <Image source={require('../../assets/images/p1.jpeg')} style={styels.story}/>
        <Image source={require('../../assets/images/p7.jpeg')} style={styels.story}/>
        <Image source={require('../../assets/images/p8.jpeg')} style={styels.story}/>
        <Image source={require('../../assets/images/p8.jpeg')} style={styels.story}/>
  </ScrollView>
    </View>
  )
}
const styels = StyleSheet.create({
    story:{
        width: 50,
        height: 50,
        borderRadius: 50,
        borderWidth: 3,
        borderColor: '#FF0000',
        marginHorizontal: 10,
    }
})
export default stories