import * as React from 'react';
import { StyleSheet, ScrollView, Text, View, TouchableWithoutFeedback, Image,TouchableOpacity} from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

const RunIcon = props => <Avatar.Icon {...props} icon="run-fast" color="#053630"/>
const CalendarIcon = props => <Avatar.Icon {...props} icon="calendar" color="#053630"/>
const AccountIcon = props => <Avatar.Icon {...props} icon="account" color="#053630"/>

const MyComponent = ({navigation}) => {
return (

  <ScrollView>
    <View style={style.container}>
<View style={style.iconContainer}>
<View  style={style.calIcon}>
  <TouchableOpacity onPress={() => navigation.navigate('Calendar')}>
              <CalendarIcon       
            size={50} />
            </TouchableOpacity>
</View>
<View style={style.accIcon}>
  <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
              <AccountIcon
               ize={50}/>
            </TouchableOpacity>
            </View>
</View>

    <Text style={style.header}>Events</Text>
   <TouchableOpacity onPress={() => navigation.navigate('SelectEvent')}>
   <Card  style={style.card}>
    <Card.Title title="Noķer Vēju Half Marathon" subtitle="Salaspils || 9 May 2022" left={RunIcon} titleStyle={{ color: "#f2f2f2" }} subtitleStyle={{ color: "#f2f2f2" }}/>
    <Card.Content>
    </Card.Content>
    <Card.Cover source={{ uri: 'https://wmimg.azureedge.net/public/img/marathons/marathon-de-montpellier/marathon-de-montpellier_5_marathon-de-montpellier.jpg?c=1574936301' }} /> 
  </Card>
   </TouchableOpacity>

<TouchableOpacity onPress={() => navigation.navigate('SelectEvent')}>
<Card  style={style.card}>
    <Card.Title title="Rimi Riga Marathon" subtitle="Riga || 14-15 May 2022" left={RunIcon} titleStyle={{ color: "#f2f2f2" }}subtitleStyle={{ color: "#f2f2f2" }} />
    <Card.Content>
    </Card.Content>
    <Card.Cover style={{ padding: 2 }} source={{ uri: 'https://www.latvia.travel/sites/default/files/styles/lightbox/public/events/lattelecom-riga-marathon-latvia-travel_1.jpg?itok=7K2m_5eX' }} /> 
  </Card>
</TouchableOpacity>

<TouchableOpacity onPress={() => navigation.navigate('SelectEvent')}>
<Card  style={style.card}>
    <Card.Title title="Riekstukalns Stirnu Buks" subtitle="Rieksukals || 21 May 2022" left={RunIcon} titleStyle={{ color: "#f2f2f2" }} subtitleStyle={{ color: "#f2f2f2" }}/>
    <Card.Content>
    </Card.Content>
    <Card.Cover source={{ uri: 'https://www.sporto.lv/uploads/2019/01/19stirnubuks2018sezonaunterveteaktuaaliimg_01732_1.jpg' }} /> 
  </Card> 
</TouchableOpacity>

    </View>

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
iconContainer:{
    marginTop:30,
      flexDirection:"row",
        
},
accIcon:{
      marginLeft:120,
      marginTop:10,
        
},
  calIcon: {
    marginTop:10,
    marginRight:120,
    
    
  },

    header: {
      fontSize: 36,
      color: "white",
      fontWeight: "bold",
      textAlign: "center",
    },
card:{
  
  margin:5,
  backgroundColor: "#053630",
  width: 300,
  height: 265,
    
}});
