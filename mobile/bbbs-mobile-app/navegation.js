import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import NewPostScreen from './screens/newPostScreen';
const Stack = createStackNavigator()
const screenOptions = {
   headerShown: false
}
function MyStack() {
    return (
      <Stack.Navigator initialRouteName='Home'screenOptions={screenOptions}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="NewPost" component={NewPostScreen} />
       
      </Stack.Navigator>
    );
  }
export default  MyStack