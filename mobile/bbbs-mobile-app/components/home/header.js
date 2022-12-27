import { View, StyleSheet,Text, TouchableOpacity} from 'react-native'
import { Image } from 'react-native'
import React from 'react'

const header = () => {
  return (
    <View style={estilos.container}>
    <TouchableOpacity>
         <Image style={estilos.logo} source={require('../../assets/images/logo.png')} />
    </TouchableOpacity>

    <View style={estilos.iconScreeen}>
        <TouchableOpacity>
            <Image style={estilos.icon} source={require('../../assets/images/dark.png')} />
            
        </TouchableOpacity>
        
        <TouchableOpacity>
            <Image style={estilos.icon} source={require('../../assets/images/noti.png')} />
        </TouchableOpacity>
        <TouchableOpacity>
            <Image style={estilos.icon} source={require('../../assets/images/exc.png')} />
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={estilos.unread}>
            <Text style={estilos.unreadText}>250</Text>
          </View>
            <Image style={estilos.icon} source={require('../../assets/images/mensage.png')} />
        </TouchableOpacity>
    </View>
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
    },
    container:{
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginHorizontal: 20,
    },
    iconScreeen:{
        flexDirection: 'row',
    },
    icon:{
        padding: 10,
        marginTop: 26,
        width: 15,
        height: 25,
        marginLeft: 10,
        resizeMode: 'contain',      
    },
    unread:{
        backgroundColor: '#FF0000',
        position: 'absolute',
        left: 20,
        top: 19,
        bottom:18,
        width: 25,
        height: 14,
        borderRadius: 10,
        justifyContent: 'center',
        zIndex: 200,
    },
    unreadText:{
        color: '#fff',
        fontWeight: '600',
        fontSize: 10,
        textAlign: 'center',
        
    }
})
export default header;