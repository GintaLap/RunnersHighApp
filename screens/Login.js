import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {Text, View, StyleSheet, Image, TouchableOpacity, TextInput, Button, Platform} from 'react-native';
import constants from 'expo-constants';


const Login = ({navigation}) => {
  const [data, setData] = React.useState({
    email: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true
  });

  const textInputChange = (val)=>{
    if( val.trim().length >= 4 ) {
      setData({
          ...data,
          username: val,
          check_textInputChange: true,
          isValidUser: true
      });
    } else {
      setData({
          ...data,
          username: val,
          check_textInputChange: false,
          isValidUser: false
      });
    }
  }
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const clickHandeler =() =>{
        setEmail
        setPassword
    }
    return(
        <View style={style.container}>
             <Image style={style.logo} source={require('../assets/images/logo.png')}/>
             <StatusBar style="auto" />
             <View style={style.inputView}>
        <TextInput
          style={style.TextInput}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={(val) => textInputChange(val)}
        />
            </View>
           
            <View style={style.inputView}>
        <TextInput
          style={style.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

 
      <TouchableOpacity style={style.loginBtn}>
        <Text style={style.loginText}
        onPress={() => navigation.navigate('AllEvents')}
        >Sign In</Text>
      </TouchableOpacity>
      <Text style={style.loginText}>OR</Text>
      <TouchableOpacity style={style.loginBtn} 
        onPress={() => navigation.navigate('Register')}>
        <Text style={style.loginText}>Sign Up</Text>
      </TouchableOpacity>
        </View>
    );
}
export default Login;

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
      inputView: {
          backgroundColor: "#e6e6e6",

          width: "75%",
          height: 45,
          marginBottom: 10,
      
          alignItems: "center",
        },
        TextInput: {
          height: 50,
          flex: 1,
          padding: 10,
          marginLeft: 20,
          marginTop: Platform.OS === 'ios' ? 0 : -12
        },
      
        forgot_button: {
          height: 30,
          marginBottom: 20,
          color:"white",
          
        },
      
        loginBtn: {
          width: "60%",
          borderRadius: 25,
          height: 50,
          alignItems: "center",
          justifyContent: "center",
          marginTop: 5,
          marginBottom:5,
          backgroundColor: "#053630",
        },
        loginText:{
            color:"white",
        }
  });