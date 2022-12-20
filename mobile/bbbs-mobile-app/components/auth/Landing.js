import React from 'react'
import { View, StyleSheet,Button } from 'react-native'

export default function Landing(navigation) {
  return (
    <View style={estilos.container}>
        <Button  style={estilos.botao}      title="Login" onPress={() => navigation.navigate('Login')}/>
        <Button title="Register" onPress={() => navigation.navigate('Register')}/>
    </View>
  )
}
const estilos = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        margin: 10,
        padding: 10,
        borderRadius: 5,
        borderWidth: 5,
        borderColor: '#000',
        
    },
    

} )



