import * as React from 'react';
import { StyleSheet, ScrollView, Text, View, TouchableWithoutFeedback, Image,TouchableOpacity, Linking} from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';


const BackIcon = props => <Avatar.Icon {...props} icon="arrow-left" color="#053630"/>
const MY_URL = 'https://rimirigamarathon.com/en/registration/run-in-2022/';

const MyComponent = ({navigation}) => {
return (

  <ScrollView>
    <View style={style.container}>
<View  style={style.backIcon}>
  <TouchableOpacity           
              onPress={() => navigation.navigate('AllEvents')} >
              <BackIcon
            size={50}
          />
    </TouchableOpacity>
</View>

    <Text style={style.header}>Rimi Riga Marathon</Text>

    <Image style={{
              resizeMode: "contain",
              height: 300,
              width: 600
            }} source={{uri: 'https://www.latvia.travel/sites/default/files/styles/lightbox/public/events/lattelecom-riga-marathon-latvia-travel_1.jpg?itok=7K2m_5eX' }} />

    </View>
    <Paragraph style={style.paragraph}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </Paragraph>
    <TouchableOpacity style={style.loginBtn} 
        onPress={() => Linking.openURL(MY_URL)}>
        <Text style={style.loginText}>Buy Entry</Text>
      </TouchableOpacity>
  </ScrollView>

  );
}

export default MyComponent;

const style = StyleSheet.create({
    container:{
        padding: 8,
        justifyContent: 'center',
        backgroundColor: '#296460',
        alignItems: "center",
},
paragraph:{
    padding:10,
    marginLeft:10,
    marginRight: 10,
},
  backIcon: {
    marginTop:20,
    marginRight:350,
    
    
  },
    header: {
      fontSize: 36,
      color: "white",
      fontWeight: "bold",
      textAlign: "center",
    },
    loginBtn: {
        width: "60%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        margin:10,
        backgroundColor: "#053630",
      },
      loginText:{
          color:"white",
      }
   
});
