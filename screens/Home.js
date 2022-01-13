import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { StatusBar } from 'expo-status-bar';

import constants from 'expo-constants';



export default function Home({navigation}){
  
  const pressHandler = () =>{
    navigation.navigate('Login')
  }

    return (
        <View style={style.container}>
          <Image style={style.logo} source={require('../assets/images/logo.png')}/>

        <TouchableOpacity style={style.loginBtn}
          onPress={pressHandler}>
            <Text style={style.welcomeText}>Let's get started</Text>
        </TouchableOpacity>
        </View>
      )
    }

    

const style = StyleSheet.create({
    container:{
        flex: 1,

        justifyContent: 'center',
        paddingTop: constants.statusBarHeight,
        backgroundColor: '#296460',
        alignItems: "center",
        padding: 8,
    },

    logo:{
        margin:50,   
    },

      welcomeText:{
        height: 30,
        color:"white",
        textAlign:"center",
        fontSize: 20,
      },
     
      loginBtn: {
        width: "60%",
        borderRadius: 25,
        height: 60,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        marginBottom:10,
        backgroundColor: "#053630",
      },
});