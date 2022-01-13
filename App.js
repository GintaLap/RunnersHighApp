
import React, { useEffect }  from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { View, ActivityIndicator } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import HomeStack from './routes/HomeStack';



export default function  App () {

  return(
    <HomeStack/>
  );
};
