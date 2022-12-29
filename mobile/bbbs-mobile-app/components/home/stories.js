import { View,Text, ScrollView ,StyleSheet,Image} from 'react-native'
import React from 'react'
import  USERS  from '../../data/users'
const stories = () => {
  return (
<View style={{marginBottom:13}}>
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {USERS.map((story, index) => (
            <View key={index}>
            <Image source={story.image} style={styels.story}/>
            <Text style={story.uss}>{story.user.length >
            10 ? story.user.substring(0, 10) + '..' : story.user
            }</Text>
            </View>
        ))} 
  </ScrollView>
</View>
  )
}
const styels = StyleSheet.create({
    story:{
        width: 50,
        height: 50,
        borderRadius: 80,
        borderWidth: 3,
        borderColor: '#89dbed',
        marginHorizontal: 10,
    },
    uss: {
        color: '#fff',
        fontSize: 10,
        textAlign: 'center',
        marginTop: 8,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
export default stories