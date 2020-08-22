import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ImageBackground, TouchableHighlight, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeUno from './app/Componets/homeUno';
import { } from 'react-native-elements';
import * as React from 'react';
import Hometwo from "./app/Componets/hometwo.js";
import Headerhometwo from "./app/Componets/headerHometwo.js";
import Registro from "./app/Componets/registro";

function HeaderhometwoScreen() {
  return (
    <Headerhometwo />
  );
}
function HometwoScreen() {
  return (
    <Hometwo />
  );
}

function inicio({ navigation }) {
  return (
    <HomeUno navigation={navigation} />
  )
}

function RegistroScreen({ navigation }) {
  return (
    <Registro navigation={navigation} />
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="homeUno" headerMode="none">
        <Stack.Screen name="homeUno" component={inicio} />
        <Stack.Screen name="Registro" component={RegistroScreen} />
        <Stack.Screen name="Hometwo" component={HometwoScreen} />
        {/*<Stack.Screen name="  " component={HeaderhometwoScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


