import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Home from '../screens/Home';
import Login from '../screens/Login';
import Register from '../screens/Register';
import AllEvents from '../screens/AllEvents';
import SelectEvent from '../screens/SelectEvent';
import CalendarView from '../screens/Calendar';
import profileSettings from '../screens/Settings';
import { NavigationContainer } from '@react-navigation/native';


const screens = {
    Home: {
      screen: Home,
      navigationOptions:{
        headerShown: false,
      }
    },
    Login: {
        screen: Login,
        navigationOptions:{
            headerShown: false,
          }
    },
    Register: {
        screen: Register,
        navigationOptions:{
            headerShown: false,
          }
    },
    AllEvents: {
        screen: AllEvents,
        navigationOptions:{
            headerShown: false,
          }
    },
    SelectEvent: {
        screen:   SelectEvent,
        navigationOptions:{
            headerShown: false,
          }
    },
    CalendarView: {
      screen: CalendarView,
      navigationOptions:{
          headerShown: false,
    }},
    Settings: {
      screen: profileSettings,
      navigationOptions: {
        headerShown: false,
      }
    },
  };
  

  const HomeStack = createStackNavigator(screens);
  
  export default createAppContainer(HomeStack);