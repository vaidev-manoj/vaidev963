
import React from 'react';
import { View ,StyleSheet, ImageBackground, Image, TouchableOpacity,Text} from 'react-native';
const WelcomeScreen = () =>
{
   return(
       
    <ImageBackground  style = { styles.backgroundImage}source = {
      require('../assets/background.jpg') 
   
    } >
   <View style={styles.logoandtext}>
            <Image style={styles.lom} source={require("../assets/logo.png")}></Image>
            <Text>Sell wat you dont need</Text>
            </View>
     <View style= {styles.logo}></View>
     <View style= {styles. register}></View>
       </ImageBackground>
 
    );
 
 }

const styles = StyleSheet.create({
  container: {
    position:'absolute',
  },
  logo:{
width:"100%",
height:70,
backgroundColor:'#fc5c65'

  },
  register:{
    width:"100%",
    height:70,
    backgroundColor:'#4ECDC4'
  },
  lom:{
    width:50,
    height:50,
   alignItems:'center',
   justifyContent:'center',
   left:40
  },
  backgroundImage:{
   flex:1,
   justifyContent:'flex-end',
   alignItems:"center"
    
  },
  logoandtext:{
       
    position:"absolute",
    top:80,
   
}
});
export default WelcomeScreen;