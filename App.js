import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View,} from 'react-native';
import ViewImagescreen from './screens/ViewImagescreen';
import WelcomeScreen from './screens/WelcomeScreen';
//import WelcomeScreen from './screens/WelcomeScreen';


export default function App() {
  return (
<ViewImagescreen></ViewImagescreen>
  );
}

const styles = StyleSheet.create({
  container: {
   
    
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  image:{
   
    
    
  }
});
