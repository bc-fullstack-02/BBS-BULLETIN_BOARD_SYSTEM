import { View,Text, ScrollView ,StyleSheet,Image} from 'react-native'
import React from 'react'
import  USERS  from '../../data/users'
const stories = () => {
  return (
    <View style={{marginBottom:13}}>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        
        {USERS.map((story, index) => (
            <Image key={index} source={story.image} style={styels.story}/>
        ))}
        
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