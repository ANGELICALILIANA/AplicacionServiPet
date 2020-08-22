import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ImageBackground, TouchableHighlight, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Inicio from './app/Componets/homeUno';
import { } from 'react-native-elements';
import * as React from 'react';
import Hometwo from "./app/Componets/hometwo.js";
import Headerhometwo from "./app/Componets/headerHometwo.js";

function HeaderhometwoScreen(){
  return(
<Headerhometwo/>
  );
}
function HometwoScreen() {
  return(
    <Hometwo/>
    );
  } 

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Inicio/>
      <Stack.Navigator>
      <Stack.Screen name=" " component={HometwoScreen}/>
      <Stack.Screen name="  " component={HeaderhometwoScreen}/>
      </Stack.Navigator>  
    </NavigationContainer>
  );
}

export default App;


