import * as React from 'react';
import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, Button, ImageBackground, TouchableHighlight, Image } from 'react-native';
import Registro from './app/Componets/registro';
import Login from './app/Componets/login';
import Home_Uno from './app/Componets/homeUno';
import EsteticaYPeluqueria from './app/Componets/esteticaypeluqueria';
import Hometwo from "./app/Componets/hometwo.js";
import Headerhometwo from "./app/Componets/headerHometwo.js";
import { InputGroup, FormControl } from 'react-bootstrap';
import Menu from "./app/Componets/menu";
/*Saludos Soy Sergio Practicando en mi brazo*/ 


function HometwoScreen({ navigation }) {
  return (
    <Hometwo navigation={navigation} />
  );
}

function RegistroScreen({ navigation }) {
  return (
    <Registro navigation={navigation} />

  );
}

function LoginScreen({ navigation }) {
  return (
    <Login navigation={navigation} />
  );
}

/**
 * 
 * Vista inicial de la aplicación "Home 1"
 */
function HomeScreen({ navigation }) {
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

function menuScreen({ navigation }) {
  return (
    <Menu navigation={navigation} />
  )
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
       <Stack.Navigator initialRouteName="homeUno" headerMode="none"> 
      {/* <Stack.Navigator initialRouteName="EsteticaYPeluqueria" headerMode="none"> */}
        <Stack.Screen name="homeUno" component={HomeScreen} />
        <Stack.Screen name="Registro" component={RegistroScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="EsteticaYPeluqueria" component={estetica} />
        <Stack.Screen name="Hometwo" component={HometwoScreen} />
        <Stack.Screen name="Menu" component={menuScreen} />
        {/*<Stack.Screen name="  " component={HeaderhometwoScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
