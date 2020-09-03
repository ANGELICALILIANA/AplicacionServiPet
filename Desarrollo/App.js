import * as React from 'react';
/* import React, { Component } from 'react'; */
import { StyleSheet, Text, View, Button, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
/* import { DrawerNavigator } from 'react-native'; */
import * as Font from 'expo-font';
import Hometwo from "./app/Componets/hometwo.js";
import Headerhometwo from "./app/Componets/headerHometwo.js";
/* import Estetica from "./app/Componets/esteticaScreen.js"
import Veterinaria from "./app/Componets/veterinariaScreen.js" */

function HometwoScreen() {
  return(
    <Hometwo/>
    );
  } 
  
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer >
      <View>
      <Headerhometwo/>
      </View>
      <Stack.Navigator headerMode="none">
      <Stack.Screen name=" " component={HometwoScreen}/>
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}

/* const navegacion = DrawerNavigator({
  estetica:{
    screen: Estetica
  },
  veterinaria:{
    screen: Veterinaria
  },

}) */

export default App;


