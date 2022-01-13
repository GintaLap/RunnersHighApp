import  React, {useState, useCallback} from 'react';
import { Text, View, StyleSheet, Image, Switch, FlatList, Button, Linking, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-paper';

const BackIcon = props => <Avatar.Icon {...props} icon="arrow-left" color="#053630"/>

const DATA = [
  {
    id: '1',
    title: 'Username',
    description: '@username',
  },
  {
    id: '2',
    title: 'First name',
    description: 'Name',
  },
  {
    id: '3',
    title: 'Last name',
    description: 'Surname',
  },
  {
    id: '4',
    title: 'e-mail',
    description: 'email@email',
  },
  {
    id: '5',
    title: 'Location',
    description: 'city',
  },
];

const Item = ({ title, description }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.paragraph}>{description}</Text>
  </View>
);

const OpenUnderConstructionButton = ({ children}) => {
  const handlePress = useCallback(async () => {
    await Linking.openUnderConstruction();

  }, []);
   return <Button title={children} onPress={handlePress} />;
};


const ProfileSettings = ({navigation}) => {
  const renderItem = ({ item }) => (
    <Item title={item.title} description={item.description} />
  );
    const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);


  return (
    <View style={styles.container}>
      <View  style={styles.backIcon}>
  <TouchableOpacity           
              onPress={() => navigation.navigate('AllEvents')} >
              <BackIcon
            size={50}
          />
    </TouchableOpacity>
</View>
    <Image             style={{
              resizeMode: "contain",
              height: 100,
              width: 200
            }} source={require('../assets/images/profilePlaceholder.png')} />
    
    <Text style={styles.header}> Profile information
    </Text>
    <View style={styles.table}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    <Text style={styles.title}>
    Notifications
    </Text>
    <View style={styles.alignswitch}>
      <Switch

        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        onValueChange={toggleSwitch}
        value={isEnabled}
        
      />
    </View>
    </View>
    <Text style={styles.header}> Account
    </Text>
    <View style={styles.bottomtable}>

    {/* These two buttons are more or less placeholders for buttons that should lead to particular pages that are not created at all
    When they would have been created, the buttons would be made fully functional
    */}
    <OpenUnderConstructionButton>
    Change password
    </OpenUnderConstructionButton>
    <OpenUnderConstructionButton>
    Blocked users
    </OpenUnderConstructionButton>
    </View>
    
    </View>

  );
};



const styles = StyleSheet.create({
  
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 1,
    backgroundColor: '#296460',

  },
  profile: {

    flex: 1,
    position: 'relative',
    top: 0,
    borderRadius: 50,
  },
  backIcon: {
    marginTop:20,
    marginRight:350,
  },
  paragraph: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'right',
    position: 'relative',
  },

  table: { 
    padding: 0,
    width: '100%',
    backgroundColor: '#ffffff',
  },

bottomtable: {
  paddingBottom: 40,
  width: '100%',
},

  alignswitch: {
    alignItems: 'flex-end',
    padding: 5,
  },

  header: {
    color: "#ffffff",
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontFamily: 'monospace',
    padding: 10,
    fontSize: 20, 
  },

  item: {
    backgroundColor: '#ffffff',
    padding: 5,
    textAlignVertical: 'center',
  },
  title: {
    fontSize: 14,
    textAlign: 'left',
  },

});

export default ProfileSettings;