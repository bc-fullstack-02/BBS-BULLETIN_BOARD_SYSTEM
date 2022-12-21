import * as React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import LandingScreen from './components/auth/Landing';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import RegisterScreen from './components/auth/Register';

const Stack = createNativeStackNavigator();

const firebaseConfig = {
  apiKey: "AIzaSyACEvbO2wW3dcPyc0G8ZjuYDjw6i2MruuI",
  authDomain: "bbs0-24b4d.firebaseapp.com",
  projectId: "bbs0-24b4d",
  storageBucket: "bbs0-24b4d.appspot.com",
  messagingSenderId: "245936483776",
  appId: "1:245936483776:web:5e2bcb2c74c11a5610ac25",
  measurementId: "G-CL2XZEJTP7"
};
if(firebase.apps.length === 0){
  firebase.initializeApp(firebaseConfig);
}
export default function App() {
  return (
    <NavigationContainer>{
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen name="Landing" component={LandingScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    }</NavigationContainer>
  );
}