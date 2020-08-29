import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ImageBackground, TouchableHighlight, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home_Uno from './app/Componets/homeUno';
import { } from 'react-native-elements';
import * as React from 'react';
import Hometwo from "./app/Componets/hometwo.js";
import Headerhometwo from "./app/Componets/headerHometwo.js";
import Registro from "./app/Componets/registro";
import EsteticaYPeluqueria from './app/Componets/esteticaypeluqueria';

const Stack = createStackNavigator();

function HometwoScreen({ navigation }) {
  return (
    <Hometwo navigation={navigation}/>
  );
}

/**
 * 
 * Vista inicial de la aplicación "Home 1"
 */
function HomeScreem({ navigation }) {
  return (
    <Home_Uno navigation={navigation} />
  )
}

/**
 * 
 * Vista de los servicios de estética y peluquería
 */
function estetica({ navigation }) {
  return (
    <EsteticaYPeluqueria navigation={navigation} />
  )
}

function RegistroScreen({ navigation }) {
  return (
    <Registro navigation={navigation} />
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="homeUno" headerMode="none">
        <Stack.Screen name="homeUno" component={HomeScreem} />
        <Stack.Screen name="Registro" component={RegistroScreen} />
        <Stack.Screen name="Hometwo" component={HometwoScreen} />
        <Stack.Screen name="EsteticaYPeluqueria" component={estetica} />
        {/*<Stack.Screen name="  " component={HeaderhometwoScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


