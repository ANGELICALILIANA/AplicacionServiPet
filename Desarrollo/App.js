import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, ImageBackground, TouchableHighlight, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Inicio from './app/Componets/homeUno';
import { } from 'react-native-elements';

const Stack = createStackNavigator();

function Home({ navigation }) {
  <Inicio />
}

function App() {
  return (
    <NavigationContainer>
      <Inicio />
    </NavigationContainer>
  );
}

export default App;
