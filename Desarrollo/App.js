import * as React from 'react';
import { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ImageBackground, StyleSheet, Text, View , Image, Button } from 'react-native';
import Registro from './app/Componets/registro';
import Login from './app/Componets/login';
import Home_Uno from './app/Componets/homeUno';

function RegistroScreen({ navigation }) {
  return (    
    <Registro navigation = {navigation}/>

  );
}

function LoginScreen({ navigation }) {
  return (
    <Login navigation = {navigation}/>
  );
}

function HomeScreen({navigation}) {
  return(
    <Home_Uno navigation = {navigation}/>
  )
  
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>      
      <Stack.Navigator initialRouteName="homeUno" headerMode="none">
        <Stack.Screen name="homeUno" component={HomeScreen}/>
        <Stack.Screen name="Registro" component={RegistroScreen}/>
        <Stack.Screen name="Login" component={LoginScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;