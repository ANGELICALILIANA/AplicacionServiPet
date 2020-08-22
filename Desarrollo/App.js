import * as React from 'react';
import { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ImageBackground, StyleSheet, Text, View , Image, Button } from 'react-native';
import Registro from './app/Componets/registro';
import Login from './app/Componets/login';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>   
      <Button title="Registrarse" onPress={() => navigation.navigate('Registro')}/>
      <Button title="Inisiar Sesión" onPress={() => navigation.navigate('Login')}/>      
    </View>
  );
}

function RegistroScreen({ navigation }) {
  return (
    <Registro/>
  );
}

function LoginScreen({ navigation }) {
  return (
    <Login/>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>      
      <Stack.Navigator initialRouteName="Servipet" headerMode="none">
      <Stack.Screen name="Home" component={HomeScreen}/>            
        <Stack.Screen name="Registro" component={RegistroScreen}/>
        <Stack.Screen name="Login" component={LoginScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;