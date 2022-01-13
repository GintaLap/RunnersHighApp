import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Component, useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableWithoutFeedback, Image, Dimensions, WebView,} from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import LogoSize from "../helperMethod/LogoSize";



const windowWidth = Dimensions.get("window").width;




function AllEvents({ headline, imageURI, imageLogo, navigation, url }) {
    var theWidth = 0;
    Image.getSize(imageLogo, (height, width) => {
      theWidth = width;
    }); 
return (

  <View style={style.container}>
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate("SelectEvent", { url })}
      style={{ flex: 1 }}
    >
      <Card>
        <Card.Content
          style={{
            paddingLeft: 19,
            paddingRight: 19,
            paddingTop: 19,
            paddingBottom: 10,
            backgroundColor: "#053630",
            flex: 1,
          }}
        >
          <Card.Cover
            style={{ borderRadius: 5, flex: 1 }}
            source={require('../assets/images/run1.jpg')}
          />
        </Card.Content>
        <Card.Content
          style={{
            paddingLeft: 19,
            paddingRight: 19,
            
            flex: 1,
          }}
        >
          <Image
            style={{
              resizeMode: "contain",
              height: 100,
              width: 200,
            }}
            source={require('../assets/images/run2.jpg')}
          />
        </Card.Content>
        <Card.Content
          style={{
            paddingLeft: 19,
            paddingRight: 19,
            height: 100,
            width: 200,
            
            flex: 1,
          }}
        >
          <Title>{headline}</Title>
        </Card.Content>
      </Card>
    </TouchableWithoutFeedback>
  </View>

  );
}

export default AllEvents;

const style = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#296460',
        alignItems: "center",
        padding: 8,
    },
  
    logo:{
        margin:50,
        
    },
    inputView: {
        backgroundColor: "#e6e6e6",
        borderRadius: 20,
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

  