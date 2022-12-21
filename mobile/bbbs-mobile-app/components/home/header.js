import { View, Text , StyleSheet, TouchableOpacity} from 'react-native'
import { Image } from 'react-native'
import React from 'react'

const header = () => {
  return (
    <View styek>
    <TouchableOpacity>
         <Image style={estilos.logo} source={require('../../assets/images/logo.png')} />
    </TouchableOpacity>
    </View>
  )
}
const estilos = StyleSheet.create({
    logo: {
        width: 150,
        height: 50,
       resizeMode: 'contain',
        marginTop: 26,
        borderRadius: 10,
    }
})


export default header;